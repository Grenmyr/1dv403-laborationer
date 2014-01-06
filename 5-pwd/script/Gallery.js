"use strict";
var Gallery = function (_xhr, _JsonXhr, _img) {
    var that = this;
    
    
    this.init = function (windowID) {
        var timer = setTimeout(function () {
            var aside = document.getElementById("aside" + windowID)
            var ajaxGif = document.createElement("img");
            ajaxGif.src = "pics/ajaxLoader.gif";
            aside.nextElementSibling.appendChild(ajaxGif);
        }, 500);
        this.setXhr();       
        this.setJsonxhr(windowID);
        getXhr().open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        getXhr().send(null);
        
        return false;

    };
    this.setBackground = function () {
        // Här kollar jag OM enter (13) trycks så kör vi istället send functionen genom den.


        _img.onclick = function (e) {
            var objectNR = e.target.id.replace("imgThumb", "");
            if (e.shiftKey == 1) {
                document.body.style.backgroundImage = "url('" + _JsonXhr[objectNR].URL + "')"
            }
            else {
                var newWIndow = new MyWindow();
                newWIndow.setArticleBackground(_JsonXhr, objectNR);
            }
            
        }
    }
    this.getJson = function () {
        return _JsonXhr;
        
    }
    this.getMaxValue = function () {
        var maxThumbWidth = 0;
        var maxThumbHeight = 0;
        for (var i = 0; i < that.getJson().length; i++) {

            if (maxThumbHeight < _JsonXhr[i].thumbHeight) {
                maxThumbHeight = _JsonXhr[i].thumbHeight;
            }
            if (maxThumbWidth < _JsonXhr[i].thumbWidth) {
                maxThumbWidth = _JsonXhr[i].thumbWidth;

            }
        }

        return [maxThumbWidth, maxThumbHeight];
    }
    this.setJsonxhr = function (windowID) {
        var starLoad = new Date();
        var xhr = getXhr();
        var count = 0;
      
        xhr.onreadystatechange = function () {
            var aside = document.getElementById("aside" + windowID)
            console.log(starLoad);
           
           

            if (xhr.readyState === 4) {

                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    _JsonXhr = JSON.parse(xhr.responseText);
                    
                    var boxSizeArray = that.getMaxValue();

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
                        that.setBackground()
                        count++;
                    }
                    var doneLoading = new Date();
                    aside.nextSibling.appendChild.removeChild;
                    clearTimeout(that.timer);
                    aside.nextElementSibling.innerHTML = count + "bilder laddade på" + ((doneLoading-starLoad)/1000) + "sekunder";
                    
       
                }
                else {
                    console.log("fel");
                }
            }
        };
    }
    function getXhr ()  {
        return _xhr;
    }
    this.setXhr = function () {
        _xhr = new XMLHttpRequest();

    };

};
Gallery.prototype.funktionsnamn = function (arg) {
    console.log("dsadsa");
};