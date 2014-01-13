"use strict";
PWD.Classes.Gallery = function (winHandler, xhr ,jsonXhr, _img) {
    this.init = function (adress) {
        // Init funktion, hela denna klassen är mer eller mindre ett händelseflöde, så satt funktionerna efter den ordning de vanligtvis körs.
        var startLoad = new Date();      
        xhr = new XMLHttpRequest();
        setJsonxhr(adress, startLoad);
    };
    function setJsonxhr(adress, startLoad) {
        // Ajaxanrop, tolkar Jsonobject.
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    jsonXhr = JSON.parse(xhr.responseText);
                    generateGallery(startLoad);
                    winHandler.loadingGif("doneloading");
                }
                else {
                    alert("fel i Ajaxanrop");
                }               
            }
        };
        xhr.open("POST", adress, true);
        xhr.send(null);
    }
    function generateGallery(startLoad) {
        // Hämtar maxvärde på Thumbs från getMaxValue genom skicka mitt object och loopar igenom för hitta största värde.
        // Sen en anropas mitt windowobject, och slutligen en loop till där jag trycker i galleriet i windowobjectet.
        var count = 0;
        var doneLoading = new Date();
        var boxSizeArray = getMaxValue(jsonXhr);
        var p = winHandler.getFooterPtag();
        var aside = winHandler.getAside();
        
        for (var i = 0; i < jsonXhr.length; i++) {
            var img = document.createElement("img");
            var div = document.createElement("div");

            div.style.width = boxSizeArray[0] + 5 + "px";
            div.style.height = boxSizeArray[1] + 5 + "px";
            img.setAttribute("src", jsonXhr[i].thumbURL);
            img.setAttribute("id", "imgThumb" + count);
            aside.appendChild(div);
            div.appendChild(img);
            _img = img;
            setBackground()
            count++;
        }
        p.innerHTML = count + "Pictures was loaded in " + ((doneLoading - startLoad) / 1000) + "seconds";
    }
    function getMaxValue(json) {
        var maxThumbWidth = 0;
        var maxThumbHeight = 0;
        for (var i = 0; i < jsonXhr.length; i++) {

            if (maxThumbHeight < json[i].thumbHeight) {
                maxThumbHeight = json[i].thumbHeight;
            }
            if (maxThumbWidth < json[i].thumbWidth) {
                maxThumbWidth = json[i].thumbWidth;
            }
        }
        return [maxThumbWidth, maxThumbHeight];
    }
   
    function setBackground() {
        // Sätter bakgrund och Öppnar bilder i nytt fönster hämtas genom onclick och ID nummer som tidigare genererats i generateGallery funktionen.
        
        _img.onclick = function (e) {
            var objectNR = e.target.id.replace("imgThumb", "");
            if (e.shiftKey == 1) {
                var main = document.querySelector('main');
                document.body.style.backgroundImage = "url('" + jsonXhr[objectNR].URL + "')"
            }
            else {
                // Om ny bild ska öppnas i nytt fönster så skapar jag ett nytt fönsterobjekt och lägger in bilden i fönster sendan trycks  
                //objektet in i min array på Portal
                var winHandlerConstructor = PWD.WinHandler.WinHandler;
                var winHandler = new winHandlerConstructor();
                PWD.Portal.ObjectArray.push(winHandler);

                winHandler.setWindowForImageView(jsonXhr[objectNR]);
                winHandler.setWindowName("Picture" + [objectNR], "" + jsonXhr[objectNR].URL + "")
            }
        }
    }
};
