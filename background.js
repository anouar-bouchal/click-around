function myListener(tabId, info, tab) {
  if (info.url) {
    console.log("Event removed");
    console.log(tab);
    chrome.tabs.onUpdated.removeListener(myListener);
  }
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url == "" || tab.url == "chrome://newtab/") {
      chrome.tabs.onUpdated.addListener(myListener);
    } else {
      console.log(tab);
    }
  });
});
