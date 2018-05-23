if(chrome.tabs != undefined) {
	chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    tabURL = tabURL.replace('http://','').replace('https://','').split(/[/?#]/)[0]; 
    //check if there is a www. or not first
    var firstDotIndex = tabURL.indexOf(".");
    tabURL = tabURL.substr(firstDotIndex+1); // eslint-disable-line 
    //else serve tabURL
    document.getElementById("url").innerHTML = tabURL;
    console.log("Domain: " + tabURL);
});
}



