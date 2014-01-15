
PWD.Classes.RSSConstructor = function (adress, winHandler) {
    "use strict";
    // Funktion som k�rs automatiskt vid anrop och anropar feed efter adress, sen h�mtar vi aside och footer fr�n f�nsterclassen och placerar v�rt RSS anrop d�r.
    var request = (function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    var footerPtag = winHandler.getFooterPtag();
                    var aside = winHandler.getAside();
                    var uppdateTime = new Date();
                    
                    aside.innerHTML = "";
                    aside.innerHTML = xhr.responseText;
                    aside.scrollTop = aside.scrollHeight;

                    winHandler.loadingGif("doneloading");

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


    

    

