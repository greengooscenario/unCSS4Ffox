// Toggle state (on/off)
let cssDisabled = false;

// Icon paths for on/off state
const iconOn = "iconOn.png";
const iconOff = "icon.png";

// Toggle CSS on/off for the current tab
function toggleCSS(tab) {
  cssDisabled = !cssDisabled;
  browser.browserAction.setIcon({ path: cssDisabled ? iconOn : iconOff, tabId: tab.id });

  if (cssDisabled) {
    browser.browserSettings.overrideContentColorScheme.set({ value: "no-preference" });
    browser.tabs.insertCSS(tab.id, { code: "body * { all: unset !important; }" });
  } else {
    browser.tabs.removeCSS(tab.id);
    browser.browserSettings.overrideContentColorScheme.clear({});
  }
}

// Add click listener for the browser action button
browser.browserAction.onClicked.addListener(toggleCSS);

