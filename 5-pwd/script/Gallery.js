"use strict";
var Gallery = function (_windowObject,_xhr, _JsonXhr, _img) {
    var that = this;

    this.init = function (windowObject,windowID) {
        this.setXhr();
        this.setObject(windowObject);
        this.setJsonxhr(windowID);
        this.getXhr().open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        this.getXhr().send(null);
        
        return false;

    };
    this.setBackground = function () {
        _img.onclick = function (e) {

            // ne får fortsätta här i morgon, 
            var target = e.target;
            that.getObject().setBackground(target);
            
            

            return false;
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
        var xhr = this.getXhr();

        xhr.onreadystatechange = function () {
            var aside = document.getElementById("aside" + windowID)
            
            
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    _JsonXhr = JSON.parse(xhr.responseText);
                    var boxSizeArray = that.getMaxValue();
                    
                    
                    for (var i = 0; i < _JsonXhr.length; i++) {
                        var img = document.createElement("img");
                        var div = document.createElement("div");
                        
                        
                        div.style.width = boxSizeArray[0]+5 + "px";
                        div.style.height = boxSizeArray[1]+5 + "px";
                       
                        img.setAttribute("src", _JsonXhr[i].thumbURL);
                        aside.appendChild(div);
                        div.appendChild(img);
                        _img = img;
                        that.setBackground()
                    }
                   
                    
                }
                else {
                    console.log("fel");
                }
            }
        };
    }
    this.getXhr = function () {
        return _xhr;
    }
    this.setXhr = function () {
        _xhr = new XMLHttpRequest();
        
    };
    this.setObject = function (windowObject) {
        _windowObject = windowObject;
    }
    this.getObject = function () {
        return _windowObject;
    }
};