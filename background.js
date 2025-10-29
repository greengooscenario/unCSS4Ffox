const icon = "icon.png";

browser.browserAction.setIcon({ path: icon, tabId: tab.id });

// Switch CSS off for the current tab
function CSSoff(tab) {
	browser.tabs.removeCSS(tab.id);
	browser.browserSettings.overrideContentColorScheme.clear({});

//	browser.browserSettings.overrideContentColorScheme.set({ value: "no-preference" });
//    browser.tabs.insertCSS(tab.id, { code: "body * { all: unset !important; }" });
}

// Add click listener for the browser action button
browser.browserAction.onClicked.addListener(CSSoff);

