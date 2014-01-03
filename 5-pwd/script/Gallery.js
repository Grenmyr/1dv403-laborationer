"use strict";
var Gallery = function (_xhr, _JsonXhr) {


    this.init = function (windowID, JsonCall) {
       ;
        
        //var ddd = new XMLHttpRequest();
        
        this.setXhr();
        this.rState(windowID);
        this.getXhr().open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        this.getXhr().send(null);
        return false;

    };
    this.getJSONParse = function (_JsonXhr) {
        
        console.log("skit")
    }
    this.rState = function (windowID) {
        var xhr = this.getXhr();
        
        xhr.onreadystatechange = function () {            
            var aside = document.getElementById("aside" + windowID)

            aside.innerHTML = "testar bara att skiten funkar!!!!";
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    _JsonXhr = JSON.parse(xhr.responseText);
                    
                    for (var i = 0; i < _JsonXhr.length; i++) {
                        var img = document.createElement("img");
                        
                        img.setAttribute("src", _JsonXhr[i].thumbURL);
                        aside.appendChild(img);
                        console.log(_JsonXhr[i].thumbURL)
                        //console.log(eatchJsonObj[i].JsonCall);
                        
                        //console.log(_JsonXhr[i]);
                    }
                    
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.log("fell");
                }
            }
        };
    }
    this.getXhr = function () {
        return _xhr;
    }
    this.setXhr = function () {
        _xhr = new XMLHttpRequest();
        console.log(_xhr);
    };
};