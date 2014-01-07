"use strict";
var Gallery = function (_xhr, _JsonXhr, _img) {
    var that = this;


    this.init = function (windowID,adress,gallery) {
        var starLoad = new Date();
        console.log(gallery);
        this.timer(windowID);
       

        this.setXhr();
        this.setJsonxhr(windowID, adress, gallery);


        
   
    };
    this.timer = function (windowID) {
        var timer = setTimeout(function () {
            var aside = document.getElementById("aside" + windowID)
            var ajaxGif = document.createElement("img");
            ajaxGif.src = "pics/ajaxLoader.gif";
            aside.nextElementSibling.appendChild(ajaxGif);
        }, 300);
    }
    this.setBackground = function (windowID) {
        _img.onclick = function (e) {
            
            var objectNR = e.target.id.replace("imgThumb", "");
            if (e.shiftKey == 1) {
                document.body.style.backgroundImage = "url('" + _JsonXhr[objectNR].URL + "')"
            }
            
            else {
                var picSize = [_JsonXhr[objectNR].height, _JsonXhr[objectNR].width];
                
                
                var newWIndow = new MyWindow(windowID+1, 300);
                newWIndow.setwindow(windowID + 1, picSize);
                newWIndow.setArticleBackground(_JsonXhr, objectNR);
            }

        }
    }
    this.getJson = function () {
        return _JsonXhr;

    }
    this.getMaxValue = function (json) {
        
        var maxThumbWidth = 0;
      
        var maxThumbHeight = 0;
        
        for (var i = 0; i < that.getJson().length; i++) {

            if (maxThumbHeight < json[i].thumbHeight) {
                maxThumbHeight = json[i].thumbHeight;
            }
            if (maxThumbWidth < json[i].thumbWidth) {
                maxThumbWidth = json[i].thumbWidth;
            }
          
            
            
        }

        return [maxThumbWidth,maxThumbHeight];
    }
    this.generateRSS = function () {
    }
    this.generateGallery = function (windowID, adress) {

        var count = 0;
        var aside = document.getElementById("aside" + windowID)
        var boxSizeArray = that.getMaxValue(_JsonXhr);

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
            that.setBackground(windowID)
            count++;
        }
        var doneLoading = new Date();
        aside.nextSibling.appendChild.removeChild;
      
        aside.nextElementSibling.innerHTML = count + "bilder laddade på" + ((doneLoading - that.starLoad) / 1000) + "sekunder";

    }
    this.setJsonxhr = function (windowID, adress, gallery) {
        
        var xhr = _xhr
        
        xhr.onreadystatechange = function () {
            
            if (xhr.readyState === 4) {

                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                }
                else {
                    console.log("fel");
                }
                if (gallery === "gallery") {
                    _JsonXhr = JSON.parse(xhr.responseText);
                    that.generateGallery(windowID);
                    
                }
                else {
                    var aside = document.getElementById("aside" + windowID);
                    aside.innerHTML = xhr.responseText;
                    
                    clearTimeout(that.timer); 
                 
                }
               
            }
           
        };
        
    
        getXhr().open("get", adress, true);
        getXhr().send(null);
    }
    function getXhr() {
        return _xhr;
    }
    this.setXhr = function () {
        _xhr = new XMLHttpRequest();

    };

};
Gallery.prototype.funktionsnamn = function (arg) {
    console.log("dsadsa");
};