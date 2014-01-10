"use strict";

PWD.Gallery.Test = (function () {

    var ThumbNailWindow = function (_xhr, _JsonXhr, _img, _startLoad) {
        var that = this;

        this.init = function (windowID, adress, gallery, callType) {
            console.log(callType)
            _startLoad = new Date();
            that.timer(windowID);
            this.setXhr();
            this.setJsonxhr(windowID, adress, gallery, callType);
        };
        this.timer = function (windowID) {
            console.log(windowID)
            var aside = document.getElementById("aside" + windowID)
            var ajaxGif = document.createElement("img");
            ajaxGif.setAttribute("id", "cpGif" + windowID);
            aside.nextElementSibling.appendChild(ajaxGif);

            var timer = setTimeout(function () {
                ajaxGif.src = "pics/ajaxLoader.gif";
            }, 300);
            return timer;
        }
        this.setBackground = function (windowID, main) {
            _img.onclick = function (e) {

                var objectNR = e.target.id.replace("imgThumb", "");
                if (e.shiftKey == 1) {


                    main.style.backgroundImage = "url('" + _JsonXhr[objectNR].URL + "')"
                }

                else {
                    var picSize = [_JsonXhr[objectNR].height, _JsonXhr[objectNR].width];
                    var newWindow = Portal.generateWindow("fullSizeImage")
                    newWindow.setWindowForImageView(_JsonXhr[objectNR]);
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
        this.generateGallery = function (windowID, adress) {
            var count = 0;
            var aside = document.getElementById("aside" + windowID)
            var boxSizeArray = that.getMaxValue(_JsonXhr);
            var main = document.querySelector('main');

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
                that.setBackground(windowID, main)
                count++;
            }

            var doneLoading = new Date();

            aside.nextElementSibling.firstChild.innerHTML = count + "bilder laddade på" + ((doneLoading - _startLoad) / 1000) + "sekunder";

        }
        this.setJsonxhr = function (windowID, adress,  callType) {
            var xhr = _xhr
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    }
                    else {
                        alert("fel i Ajaxanrop");
                    }
                    if (callType === "POST") {
                        _JsonXhr = JSON.parse(xhr.responseText);
                        that.generateGallery(windowID);
                    }
                    else {
                        var aside = document.getElementById("aside" + windowID);
                        aside.innerHTML = xhr.responseText;
                        aside.nextElementSibling.firstChild.innerHTML = "Senast uppdaterad " + _startLoad.getHours() + ":" + _startLoad.getMinutes() + ":" + _startLoad.getSeconds();
                    }
                    document.getElementById("cpGif" + windowID).remove();
                }
            };
            getXhr().open(callType, adress, true);
            getXhr().send(null);
        }
        function getXhr() {
            return _xhr;
        }
        this.setXhr = function () {
            _xhr = new XMLHttpRequest();

        };
    }

    ThumbNailWindow.prototype.methodName = function () {
        console.log("This is a prototype method.");
    };

    return ThumbNailWindow;
}());
