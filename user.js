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

/****************************************************************************
 * SECTION: DISABLE UPDATES
****************************************************************************/

// PREF: Disable application updates
user_pref("app.update.enabled", false);
// PREF: Disable background update checks
user_pref("app.update.auto", false);
// PREF: Disable update notifications
user_pref("app.update.silent", false);
// PREF: Disable update service
user_pref("app.update.service.enabled", false);
// PREF: Disable update staging
user_pref("app.update.staging.enabled", false);
// PREF: Disable update badge and UI prompts
user_pref("app.update.badge", false);
user_pref("browser.update.enabled", false);
user_pref("browser.update.showUpdatePrompt", false);

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

/****************************************************************************
 * SECTION: LEPTON'S PHOTON STYLE
****************************************************************************/

// v8.7.0 Lepton-Photon-Style
// ** Theme Default Options ****************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// about:home Search Bar - 89 Above
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// CSS's `:has()` selector #457 - 103 Above
user_pref("layout.css.has-selector.enabled", true);

// Browser Theme Based Scheme - Will be activate 95 Above
// user_pref("layout.css.prefers-color-scheme.content-override", 3);

// ** Theme Related Options ****************************************************
// == Theme Distribution Settings ==============================================
// The rows that are located continuously must be changed `true`/`false` explicitly because there is a collision.
// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#important
user_pref("userChrome.tab.connect_to_window",          true); // Original, Photon
user_pref("userChrome.tab.color_like_toolbar",         true); // Original, Photon

user_pref("userChrome.tab.lepton_like_padding",       false); // Original
user_pref("userChrome.tab.photon_like_padding",        true); // Photon

user_pref("userChrome.tab.dynamic_separator",         false); // Original, Proton
user_pref("userChrome.tab.static_separator",           true); // Photon
user_pref("userChrome.tab.static_separator.selected_accent", false); // Just option
user_pref("userChrome.tab.bar_separator",             false); // Just option

user_pref("userChrome.tab.newtab_button_like_tab",    false); // Original
user_pref("userChrome.tab.newtab_button_smaller",      true); // Photon
user_pref("userChrome.tab.newtab_button_proton",      false); // Proton

user_pref("userChrome.icon.panel_full",               false); // Original, Proton
user_pref("userChrome.icon.panel_photon",              true); // Photon

// Original Only
user_pref("userChrome.tab.box_shadow",                false);
user_pref("userChrome.tab.bottom_rounded_corner",     false);

// Photon Only
user_pref("userChrome.tab.photon_like_contextline",    true);
user_pref("userChrome.rounding.square_tab",            true);

// Proton Only
// user_pref("userChrome.tab.supernova_like_contextline",   true);

// == Theme Compatibility Settings =============================================
// user_pref("userChrome.compatibility.accent_color",         true); // Firefox v103 Below
// user_pref("userChrome.compatibility.covered_header_image", true);
// user_pref("userChrome.compatibility.panel_cutoff",         true);
// user_pref("userChrome.compatibility.navbar_top_border",    true);
// user_pref("userChrome.compatibility.dynamic_separator",    true); // Need dynamic_separator

// user_pref("userChrome.compatibility.os.linux_non_native_titlebar_button", true);
// user_pref("userChrome.compatibility.os.windows_maximized", true);
// user_pref("userChrome.compatibility.os.win11",             true);

// == Theme Custom Settings ====================================================
// -- User Chrome --------------------------------------------------------------
// user_pref("userChrome.theme.private",                       true);
// user_pref("userChrome.theme.proton_color.dark_blue_accent", true);
// user_pref("userChrome.theme.monospace",                     true);
// user_pref("userChrome.theme.transparent.frame",             true);
// user_pref("userChrome.theme.transparent.menu",              true);
// user_pref("userChrome.theme.transparent.panel",             true);
// user_pref("userChrome.theme.non_native_menu",               true); // only for linux

// user_pref("userChrome.decoration.disable_panel_animate",    true);
// user_pref("userChrome.decoration.disable_sidebar_animate",  true);
// user_pref("userChrome.decoration.panel_button_separator",   true);
// user_pref("userChrome.decoration.panel_arrow",              true);

// user_pref("userChrome.autohide.tab",                        true);
// user_pref("userChrome.autohide.tab.opacity",                true);
// user_pref("userChrome.autohide.tab.blur",                   true);
// user_pref("userChrome.autohide.tabbar",                     true);
// user_pref("userChrome.autohide.navbar",                     true);
// user_pref("userChrome.autohide.bookmarkbar",                true);
// user_pref("userChrome.autohide.sidebar",                    true);
// user_pref("userChrome.autohide.fill_urlbar",                true);
// user_pref("userChrome.autohide.back_button",                true);
// user_pref("userChrome.autohide.forward_button",             true);
// user_pref("userChrome.autohide.page_action",                true);
// user_pref("userChrome.autohide.toolbar_overlap",            true);
// user_pref("userChrome.autohide.toolbar_overlap.allow_layout_shift", true);

// user_pref("userChrome.hidden.tab_icon",                     true);
// user_pref("userChrome.hidden.tab_icon.always",              true);
// user_pref("userChrome.hidden.tabbar",                       true);
// user_pref("userChrome.hidden.navbar",                       true);
// user_pref("userChrome.hidden.private_indicator",            true);
// user_pref("userChrome.hidden.titlebar_container",           true);
// user_pref("userChrome.hidden.sidebar_header",               true);
// user_pref("userChrome.hidden.sidebar_header.vertical_tab_only", true);
// user_pref("userChrome.hidden.urlbar_iconbox",               true);
// user_pref("userChrome.hidden.urlbar_iconbox.label_only",    true);
// user_pref("userChrome.hidden.bookmarkbar_icon",             true);
// user_pref("userChrome.hidden.bookmarkbar_label",            true);
// user_pref("userChrome.hidden.disabled_menu",                true);

// user_pref("userChrome.centered.tab",                        true);
// user_pref("userChrome.centered.tab.label",                  true);
// user_pref("userChrome.centered.urlbar",                     true);
// user_pref("userChrome.centered.bookmarkbar",                true);

// user_pref("userChrome.counter.tab",                         true);
// user_pref("userChrome.counter.bookmark_menu",               true);

// user_pref("userChrome.combined.nav_button",                 true);
// user_pref("userChrome.combined.nav_button.home_button",     true);
// user_pref("userChrome.combined.urlbar.nav_button",          true);
// user_pref("userChrome.combined.urlbar.home_button",         true);
// user_pref("userChrome.combined.urlbar.reload_button",       true);
// user_pref("userChrome.combined.sub_button.none_background", true);
// user_pref("userChrome.combined.sub_button.as_normal",       true);

// user_pref("userChrome.rounding.square_button",              true);
// user_pref("userChrome.rounding.square_dialog",              true);
// user_pref("userChrome.rounding.square_panel",               true);
// user_pref("userChrome.rounding.square_panelitem",           true);
// user_pref("userChrome.rounding.square_menupopup",           true);
// user_pref("userChrome.rounding.square_menuitem",            true);
// user_pref("userChrome.rounding.square_infobox",             true);
// user_pref("userChrome.rounding.square_toolbar",             true);
// user_pref("userChrome.rounding.square_field",               true);
// user_pref("userChrome.rounding.square_urlView_item",        true);
// user_pref("userChrome.rounding.square_checklabel",          true);

// user_pref("userChrome.padding.first_tab",                   true);
// user_pref("userChrome.padding.first_tab.always",            true);
// user_pref("userChrome.padding.drag_space",                  true);
// user_pref("userChrome.padding.drag_space.maximized",        true);

// user_pref("userChrome.padding.toolbar_button.compact",      true);
// user_pref("userChrome.padding.menu_compact",                true);
// user_pref("userChrome.padding.bookmark_menu.compact",       true);
// user_pref("userChrome.padding.urlView_expanding",           true);
// user_pref("userChrome.padding.urlView_result",              true);
// user_pref("userChrome.padding.panel_header",                true);

// user_pref("userChrome.urlbar.iconbox_with_separator",       true);

// user_pref("userChrome.urlView.as_commandbar",               true);
// user_pref("userChrome.urlView.full_width_padding",          true);
// user_pref("userChrome.urlView.always_show_page_actions",    true);
// user_pref("userChrome.urlView.move_icon_to_left",           true);
// user_pref("userChrome.urlView.go_button_when_typing",       true);
// user_pref("userChrome.urlView.focus_item_border",           true);

// user_pref("userChrome.tabbar.as_titlebar",                  true);
// user_pref("userChrome.tabbar.fill_width",                   true);
// user_pref("userChrome.tabbar.multi_row",                    true);
// user_pref("userChrome.tabbar.unscroll",                     true);
// user_pref("userChrome.tabbar.on_bottom",                    true);
// user_pref("userChrome.tabbar.on_bottom.above_bookmark",     true); // Need on_bottom
// user_pref("userChrome.tabbar.on_bottom.menubar_on_top",     true); // Need on_bottom
// user_pref("userChrome.tabbar.on_bottom.hidden_single_tab",  true); // Need on_bottom
// user_pref("userChrome.tabbar.one_liner",                    true);
// user_pref("userChrome.tabbar.one_liner.combine_navbar",     true); // Need one_liner
// user_pref("userChrome.tabbar.one_liner.tabbar_first",       true); // Need one_liner
// user_pref("userChrome.tabbar.one_liner.responsive",         true); // Need one_liner

// user_pref("userChrome.tab.bottom_rounded_corner.all",       true);
// user_pref("userChrome.tab.bottom_rounded_corner.australis", true);
// user_pref("userChrome.tab.bottom_rounded_corner.edge",      true);
// user_pref("userChrome.tab.bottom_rounded_corner.chrome",    true);
// user_pref("userChrome.tab.bottom_rounded_corner.chrome_legacy", true);
// user_pref("userChrome.tab.bottom_rounded_corner.wave",      true);
// user_pref("userChrome.tab.always_show_tab_icon",            true);
// user_pref("userChrome.tab.close_button_at_pinned",          true);
// user_pref("userChrome.tab.close_button_at_pinned.always",   true);
// user_pref("userChrome.tab.close_button_at_pinned.background", true);
// user_pref("userChrome.tab.close_button_at_hover.always",    true); // Need close_button_at_hover
// user_pref("userChrome.tab.close_button_at_hover.with_selected", true);  // Need close_button_at_hover
// user_pref("userChrome.tab.sound_show_label",                true); // Need remove sound_hide_label
// user_pref("userChrome.tab.container.on_top",                true);
// user_pref("userChrome.tab.container.always_long",           true);
// user_pref("userChrome.tab.sound_with_favicons.on_center",   true);
// user_pref("userChrome.tab.selected_bold",                   true);

// user_pref("userChrome.navbar.as_sidebar",                   true);

// user_pref("userChrome.bookmarkbar.multi_row",               true);

// user_pref("userChrome.findbar.floating_on_top",             true);

// user_pref("userChrome.panel.remove_strip",                  true);
// user_pref("userChrome.panel.full_width_separator",          true);
// user_pref("userChrome.panel.full_width_padding",            true);

// user_pref("userChrome.sidebar.overlap",                     true);

// user_pref("userChrome.icon.disabled",                       true);
// user_pref("userChrome.icon.account_image_to_right",         true);
// user_pref("userChrome.icon.account_label_to_right",         true);
// user_pref("userChrome.icon.menu.full",                      true);
// user_pref("userChrome.icon.global_menu.mac",                true);

// -- User Content -------------------------------------------------------------
// user_pref("userContent.player.ui.twoline",                  true);

// user_pref("userContent.newTab.hidden_logo",                 true);
// user_pref("userContent.newTab.background_image",            true); // Need wallpaper image to `userContent.css`. :root { --uc-newTab-wallpaper: url("../icons/background_image.png"); }

// user_pref("userContent.page.proton_color.dark_blue_accent", true);
// user_pref("userContent.page.proton_color.system_accent",    true);
// user_pref("userContent.page.dark_mode.pdf",                 true);
// user_pref("userContent.page.monospace",                     true);

// == Theme Default Settings ===================================================
// -- User Chrome --------------------------------------------------------------
user_pref("userChrome.compatibility.theme",       true);
user_pref("userChrome.compatibility.os",          true);

user_pref("userChrome.theme.built_in_contrast",   true);
user_pref("userChrome.theme.system_default",      true);
user_pref("userChrome.theme.proton_color",        true);
user_pref("userChrome.theme.proton_chrome",       true); // Need proton_color
user_pref("userChrome.theme.fully_color",         true); // Need proton_color
user_pref("userChrome.theme.fully_dark",          true); // Need proton_color

user_pref("userChrome.decoration.cursor",         true);
user_pref("userChrome.decoration.field_border",   true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate",        true);

user_pref("userChrome.padding.tabbar_width",      true);
user_pref("userChrome.padding.tabbar_height",     true);
user_pref("userChrome.padding.toolbar_button",    true);
user_pref("userChrome.padding.navbar_width",      true);
user_pref("userChrome.padding.urlbar",            true);
user_pref("userChrome.padding.bookmarkbar",       true);
user_pref("userChrome.padding.infobar",           true);
user_pref("userChrome.padding.menu",              true);
user_pref("userChrome.padding.bookmark_menu",     true);
user_pref("userChrome.padding.global_menubar",    true);
user_pref("userChrome.padding.panel",             true);
user_pref("userChrome.padding.popup_panel",       true);

user_pref("userChrome.tab.multi_selected",        true);
user_pref("userChrome.tab.unloaded",              true);
user_pref("userChrome.tab.letters_cleary",        true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_hide_label",      true);
user_pref("userChrome.tab.sound_with_favicons",   true);
user_pref("userChrome.tab.pip",                   true);
user_pref("userChrome.tab.container",             true);
user_pref("userChrome.tab.crashed",               true);

user_pref("userChrome.fullscreen.overlap",        true);
user_pref("userChrome.fullscreen.show_bookmarkbar", true);

user_pref("userChrome.icon.library",              true);
user_pref("userChrome.icon.panel",                true);
user_pref("userChrome.icon.menu",                 true);
user_pref("userChrome.icon.context_menu",         true);
user_pref("userChrome.icon.global_menu",          true);
user_pref("userChrome.icon.global_menubar",       true);
user_pref("userChrome.icon.1-25px_stroke",        true);

// -- User Content -------------------------------------------------------------
user_pref("userContent.player.ui",             true);
user_pref("userContent.player.icon",           true);
user_pref("userContent.player.noaudio",        true);
user_pref("userContent.player.size",           true);
user_pref("userContent.player.click_to_play",  true);
user_pref("userContent.player.animate",        true);

user_pref("userContent.newTab.full_icon",      true);
user_pref("userContent.newTab.animate",        true);
user_pref("userContent.newTab.pocket_to_last", true);
user_pref("userContent.newTab.searchbar",      true);

user_pref("userContent.page.field_border",     true);
user_pref("userContent.page.illustration",     true);
user_pref("userContent.page.proton_color",     true);
user_pref("userContent.page.dark_mode",        true); // Need proton_color
user_pref("userContent.page.proton",           true); // Need proton_color

// ** Useful Options ***********************************************************
// Tab preview
// https://blog.nightly.mozilla.org/2024/02/06/a-preview-of-tab-previews-these-weeks-in-firefox-issue-153/
user_pref("browser.tabs.hoverPreview.enabled", true);

// Paste suggestion at urlbar
// https://blog.nightly.mozilla.org/2023/12/04/url-gonna-want-to-check-this-out-these-weeks-in-firefox-issue-150/
user_pref("browser.urlbar.clipboard.featureGate", true);

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
// user_pref("browser.urlbar.unitConversion.enabled", true);

// Draw in Titlebar
// user_pref("browser.tabs.drawInTitlebar", true);
// user_pref("browser.tabs.inTitlebar",        1); // Nightly, 96 Above

// Searchbar, Removed from settings starting with FF v122
// user_pref("browser.search.widget.inNavBar",    true);

// Firefox view search
// https://blog.nightly.mozilla.org/2023/12/14/better-searching-in-firefox-to-close-out-2023-these-weeks-in-firefox-issue-151/
// user_pref("browser.firefox-view.search.enabled",       true);
// user_pref("browser.firefox-view.virtual-list.enabled", true);

// Firefox screenshot
// https://blog.nightly.mozilla.org/2024/01/22/happy-new-year-these-weeks-in-firefox-issue-152/
// user_pref("screenshots.browser.component.enabled", true);