"use strict";

PWD.Classes.Gallery = function (WinHandler, startLoad, xhr, _JsonXhr, _img) {
    WinHandler.setWindowName("Gallery", "pics/3.png");
   
    var that = this;
    this.init = function (adress, callType) {
        startLoad = new Date();

        WinHandler.loadingGif(null);
        setXhr();
        setJsonxhr(adress, callType);
    };
    function setXhr() {
        xhr = new XMLHttpRequest();

    };
    function setJsonxhr(adress, callType) {
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    _JsonXhr = JSON.parse(xhr.responseText);
                    generateGallery();
                    WinHandler.loadingGif("doneloading");
                }
                else {
                    alert("fel i Ajaxanrop");
                }               
            }
        };
        xhr.open(callType, adress, true);
        xhr.send(null);
    }
    function generateGallery() {
        var count = 0;
        var doneLoading = new Date();

        var aside = WinHandler.getAside();
        var boxSizeArray = that.getMaxValue(_JsonXhr);
        var p = WinHandler.getFooterPtag();

        for (var i = 0; i < _JsonXhr.length; i++) {
            var img = document.createElement("img");
            var div = document.createElement("div");

            div.style.width = boxSizeArray[0] + 5 + "px";
            div.style.height = boxSizeArray[1] + 5 + "px";
            img.setAttribute("src", _JsonXhr[i].thumbURL);
            img.setAttribute("id", "imgThumb" + count);
            aside.appendChild(div);
            div.appendChild(img);
            _img = img;
            setBackground()
            count++;
        }
        p.innerHTML = count + "bilder laddade på" + ((doneLoading - startLoad) / 1000) + "sekunder";
    }
   
    function setBackground() {
        _img.onclick = function (e) {
            var objectNR = e.target.id.replace("imgThumb", "");
            if (e.shiftKey == 1) {
                var main = document.querySelector('main');
                main.style.backgroundImage = "url('" + _JsonXhr[objectNR].URL + "')"
            }
            else {
                var picSize = [_JsonXhr[objectNR].height, _JsonXhr[objectNR].width];
                var WinHandler = Portal.generateWindow("fullSizeImage")
                WinHandler.setWindowForImageView(_JsonXhr[objectNR]);
                WinHandler.setWindowName("Picture" + [objectNR])
            }
        }
    }
    this.getMaxValue = function (json) {
        var maxThumbWidth = 0;
        var maxThumbHeight = 0;
        for (var i = 0; i < _JsonXhr.length; i++) {

            if (maxThumbHeight < json[i].thumbHeight) {
                maxThumbHeight = json[i].thumbHeight;
            }
            if (maxThumbWidth < json[i].thumbWidth) {
                maxThumbWidth = json[i].thumbWidth;
            }
        }
        return [maxThumbWidth, maxThumbHeight];
    }
   
};
