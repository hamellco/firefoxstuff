/****************************************************************************
 * SECTION: SETTINGS GENERAL
****************************************************************************/

// PREF: Set Nord Firefox theme as the active theme
user_pref("extensions.activeThemeID", "nord-firefox@mozilla.org");

// PREF: Let websites follow the dark theme based on Firefox settings
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// PREF: Disable "Recommend extensions as you browse"
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// PREF: Disable "Recommend features as you browse"
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

/****************************************************************************
 * SECTION: SETTINGS HOME
****************************************************************************/

// PREF: Make sure Activity Stream is enabled
user_pref("browser.newtabpage.activity-stream.enabled", true);

// PREF: Enable the main feed sections (required for most new-tab content)
user_pref("browser.newtabpage.activity-stream.feeds.sections", true);

// PREF: Enable "Recent Activity" (Highlights) in the new tab page
user_pref("browser.newtabpage.activity-stream.showRecentActivity", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", true);

// PREF: Show visited pages and bookmarks in "Recent Activity"
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", true);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", true);

// PREF: Disable Pages Saved to Pocket in "Recent Activity"
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// PREF: Disable "Most recent download" in Recent Activity
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);

// PREF: Remove Shortcuts (Top Sites)
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// PREF: Remove Sponsored Shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// PREF: Remove Recommended Stories (Pocket)
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);

// PREF: Remove Weather widget
user_pref("browser.newtabpage.activity-stream.showWeather", false);

/****************************************************************************
 * SECTION: SETTINGS - SEARCH
****************************************************************************/

// PREF: Disable "Show trending search suggestions" in the address bar
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.quicksuggest.trending", false);

// PREF: Disable all Quick Suggest features (optional for full suggestion disable)
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);

/****************************************************************************
 * SECTION: SETTINGS - PRIVACY & SECURITY
****************************************************************************/

// PREF: Set Enhanced Tracking Protection to Strict mode for stronger privacy
user_pref("browser.contentblocking.category", "strict");

// PREF: Enable Global Privacy Control to tell websites not to sell or share my data
user_pref("privacy.globalprivacycontrol.enabled", true);

// PREF: Set history mode to Use custom settings for history
user_pref("browser.privatebrowsing.autostart", false); // False ensures normal browsing, not private mode

// PREF: Remember browsing and download history
user_pref("places.history.enabled", true);

// PREF: Remember search and form history
user_pref("browser.formfill.enable", true);

// PREF: Disable asking to save passwords
user_pref("signon.rememberSignons", false);

// PREF: Disable automatic filling of usernames and passwords
user_pref("signon.autofillForms", false);

// PREF: Disable suggesting strong passwords
user_pref("signon.generation.enabled", false);

// PREF: Disable suggesting Firefox Relay email masks
user_pref("extensions.fxrelay.enabled", false);

// PREF: Disable showing alerts about passwords for breached websites
user_pref("browser.security.breach-detection.enabled", false);

// PREF: Disable requiring device sign-in to fill and manage passwords
user_pref("signon.management.page.os-auth.enabled", false);

// PREF: Disable using a Primary Password (Master Password)
user_pref("signon.masterPassword", false);

// PREF: Enable Windows system root certificates (revert if compatibility issues arise)
user_pref("security.enterprise_roots.enabled", true);

// PREF: Disable saving and filling addresses
user_pref("extensions.formautofill.addresses.enabled", false);

// PREF: Disable saving and filling payment methods
user_pref("extensions.formautofill.creditCards.enabled", false);

// PREF: Disable requiring device sign-in to fill and manage payment methods
user_pref("extensions.formautofill.management.page.os-auth.enabled", false);

// PREF: Enable HTTPS-Only Mode by default for all windows
user_pref("dom.security.https_only_mode", true);

// PREF: Enable DNS over HTTPS with NextDNS for maximum protection
user_pref("network.trr.mode", 3); // 3 = Explicit DoH, use only the specified provider
user_pref("network.trr.uri", "https://dns.nextdns.io/66c5f2"); // Primary NextDNS DoH endpoint (verify ID)
user_pref("network.trr.bootstrapAddress", "45.90.28.0"); // NextDNS primary IP for initial connection
user_pref("network.trr.confirmationNS", "45.90.30.0"); // NextDNS secondary IP for TRR confirmation
user_pref("network.trr.backup_uri", "https://dns.nextdns.io/dns-query"); // Fallback to generic NextDNS DoH
user_pref("network.trr.allow-rfc1918", false); // Prevent DoH for private IP ranges

/****************************************************************************
 * SECTION: SETTINGS - EXTENSIONS
****************************************************************************/

// PREF: Disable the "Recommended" extensions in about:addons
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: Remove the discovery pane content
user_pref("extensions.webservice.discoverURL", "");

/****************************************************************************
 * SECTION: UNDER THE HOOD
****************************************************************************/

// PREF: Fully disable Firefox Pocket integration
user_pref("extensions.pocket.enabled", false);

// PREF: Fully disable Firefox Sync and account services
user_pref("services.sync.enabled", false);
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.account.device.name", "");
user_pref("identity.fxaccounts.pairing.enabled", false);
user_pref("identity.fxaccounts.autoconfig.enabled", false);
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");

// PREF: Block any attempts to use Sync without explicit user action
user_pref("services.sync.engine.addons", false);
user_pref("services.sync.engine.bookmarks", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.prefs", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.engine.addresses", false);
user_pref("services.sync.engine.creditcards", false);
user_pref("services.sync.engine.payment-methods", false);

// PREF: Disable proxy settings and use direct connection
user_pref("network.proxy.type", 0);

// PREF: Completely disable DRM (EME) support - may break streaming services like Netflix
user_pref("media.eme.enabled", false);                // Disables DRM in general
user_pref("media.gmp-widevinecdm.enabled", false);    // Disables the Widevine plugin
user_pref("media.gmp-widevinecdm.visible", false);    // Hides Widevine from plugin listings
user_pref("browser.eme.ui.enabled", false);           // Hides all DRM-related UI in about:preferences

/****************************************************************************
 * SECTION: DISABLE TELEMETRY
****************************************************************************/

// PREF: Disable sending technical and interaction data to Mozilla
user_pref("datareporting.healthreport.uploadEnabled", false);

// PREF: Disable general telemetry data collection
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.unified", false);

// PREF: Disable new tab page telemetry (activity stream)
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// PREF: Disable Firefox Suggest (telemetry-related features)
user_pref("browser.urlbar.suggest.firefoxsuggest", false);
user_pref("browser.urlbar.suggest.firefoxsuggest.client", false);

// PREF: Disable performance and event telemetry
user_pref("browser.ping-centre.telemetry", false);
user_pref("devtools.eventlooplag.enabled", false);
user_pref("network.allow-experiments", false);

// PREF: Disable allowing websites to perform privacy-preserving ad measurement
user_pref("privacy.prioritize_ad_measurement", false);

// PREF: Disable telemetry coverage reporting
user_pref("toolkit.telemetry.coverage.opt-out", true);

/** EXPERIMENTS **/
// PREF: Disable installing and running studies
user_pref("app.shield.optoutstudies.enabled", false);

// PREF: Disable Normandy experiments and A/B testing
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// PREF: Disable general experiments support
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);

/** CRASH REPORTS **/
// PREF: Disable automatically sending crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);

/** DETECTION **/
// PREF: Disable captive portal and connectivity detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);