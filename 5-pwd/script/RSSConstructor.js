"use strict";


PWD.Classes.RssXHR = function (adress, WinHandler) {
    if (WinHandler !== undefined) { 
        WinHandler.loadingGif();
        WinHandler.setWindowName("RSS Reader", "pics/4.png");
    }
    var request = (function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    // skriv kod här

                    var aside = WinHandler.getAside();
                    aside.innerHTML = "";
                    aside.innerHTML = xhr.responseText;
                    aside.scrollTop = aside.scrollHeight;
                    WinHandler.loadingGif("doneloading");
                    var uppdateTime = new Date();
                    var footerPtag = WinHandler.getFooterPtag();
                    
                    footerPtag.innerHTML = footerPtag.innerHTML = "Senast uppdaterad " + uppdateTime.getHours() + ":" + uppdateTime.getMinutes() + ":" + uppdateTime.getSeconds();
                }
                else {
                    alert("fel i Ajaxanrop");
                }
            }
        };
        xhr.open("GET", adress, true);
        xhr.send(null);
        
    }());
    
};


    

    

