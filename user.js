/*** user.js by nutta-git @GitHub
 
 *PLEASE READ* 
 
user.js disables some of the telemetry in FireFox.
user.js takes inspiration from arkenfox/user.js
Please have a backup of your orginal Profile before using this script.
This script MAY casue unknown issues. Use at your own RISK!

***/

user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");

user_pref("app.update.auto", false);
user_pref("app.update.background.scheduling.enabled", false);

user_pref("browser.search.update", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

user_pref("browser.formfill.enable", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.fixup.alternate.enabled", false);

user_pref("browser.discovery.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.send_pings", false);
user_pref("browser.ping-centre.telemetry", false);

user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.startupRolloutPrefs.doh-rollout.enabled", false);

user_pref("captivedetect.canonicalURL", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false)
user_pref("extensions.pocket.enabled", false);
user_pref("identity.fxaccounts.enabled", false);

user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
