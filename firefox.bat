@echo off
set REPO_DIR=C:\Users\nm\GitHub\firefoxstuff
set USER_JS=C:\Users\nm\AppData\Roaming\Mozilla\Firefox\Profiles\8mek0nz4.NM\user.js
set POLICIES_JSON=C:\Program Files\Mozilla Firefox\distribution\policies.json
set PROFILE_DIR=C:\Users\nm\AppData\Roaming\Mozilla\Firefox\Profiles\8mek0nz4.NM
set TEMP_DIR=C:\Temp\firefox_backup
set ZIP_FILE=%REPO_DIR%\firefox_profile_essentials.7z
set SEVEN_ZIP="C:\Program Files\7-Zip\7z.exe"
set BAT_FILE=%~f0
set BAT_NAME=%~nx0

echo Starting Firefox config backup and update...

REM Part 1: Create 7-Zip backup of profile essentials
echo Preparing Firefox profile backup...

REM Create temp directory
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"

REM Copy essential files to temp directory
echo Copying essential files...
copy "%PROFILE_DIR%\prefs.js" "%TEMP_DIR%\"
if exist "%PROFILE_DIR%\user.js" copy "%PROFILE_DIR%\user.js" "%TEMP_DIR%\"
copy "%PROFILE_DIR%\places.sqlite" "%TEMP_DIR%\"
copy "%PROFILE_DIR%\cookies.sqlite" "%TEMP_DIR%\"
xcopy "%PROFILE_DIR%\extensions" "%TEMP_DIR%\extensions" /E /H /C /I

REM Create 7-Zip archive with ultra compression
echo Creating 7-Zip archive with ultra compression...
%SEVEN_ZIP% a -t7z -mx9 "%ZIP_FILE%" "%TEMP_DIR%\*"

REM Clean up temp directory
echo Cleaning up temp directory...
rmdir /S /Q "%TEMP_DIR%"

REM Part 2: Update GitHub repo with user.js, policies.json, .7z, and this script
echo Updating Firefox configs for GitHub...

if exist "%USER_JS%" (
    copy "%USER_JS%" "%REPO_DIR%\user.js"
) else (
    echo Warning: user.js not found at %USER_JS%
)

if exist "%POLICIES_JSON%" (
    copy "%POLICIES_JSON%" "%REPO_DIR%\policies.json"
) else (
    echo Warning: policies.json not found at %POLICIES_JSON%
)

REM Copy this batch file to the repo
echo Copying this script to repo...
copy "%BAT_FILE%" "%REPO_DIR%\%BAT_NAME%"

REM Commit and push to GitHub
cd /d "%REPO_DIR%"
git add user.js policies.json firefox_profile_essentials.7z %BAT_NAME%
git commit -m "Update Firefox configs, backup, and script - %DATE% %TIME%"
git push origin main

echo Process complete! Backup saved to %ZIP_FILE% and GitHub updated.
pause