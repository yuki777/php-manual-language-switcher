chrome.webRequest.onBeforeRequest.addListener(function(details) {
  let language = localStorage.getItem('language');
  let regex = new RegExp('https:\/\/www\.php\.net\/manual\/.+[^' + language + ']\/(.*)$');
  let matched = details.url.match(regex);
  if(matched){
    return {
      redirectUrl: 'https://www.php.net/manual/' + language + '/' + matched[1]
    };
  }
}, {
  urls: ["*://*.php.net/*"]
}, ["blocking"]);

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: 'options.html'});
});

chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
    onInstall();
  }else if(details.reason == "update"){
  }
});

function onInstall() {
  if (! localStorage.getItem('language')) {
    localStorage.setItem('language', 'en');
  }
}
