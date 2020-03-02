//Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    //send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
    });
    chrome.tabs.create({'url': chrome.extension.getURL('page.html')}, function(tab) {
        console.log("chrome.tabs.CREATED");
      });
});

    

function callback(details) {
    console.group(
      `Intercepting request id ${details.requestId}: ${details.method} ${details.url}`
    );
  

    for (var i = 0; i < details.requestHeaders.length; i++) {
      var header = details.requestHeaders[i];
      if (header.name.toLowerCase() === 'accept-language') {
        console.log(
          `Changing accept-language header value from ${header.value} to "ru"`
        );
        header.value = 'ru';
      }
    }
  
    console.groupEnd();

    return { requestHeaders: details.requestHeaders };
  }
  
  var filter = {
    urls: ['<all_urls>']
  };
  
  var extraInfo = ['blocking', 'requestHeaders', 'extraHeaders'];
  
  chrome.webRequest.onBeforeSendHeaders.addListener(callback, filter, extraInfo);
// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         if (request.message === "open_new_tab") {
//             chrome.tabs.create({ "url": request.url });
//         }
//     }
// );