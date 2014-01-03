"use strict";
var Gallery = function (_xhr, _JsonXhr) {


    this.init = function (windowID) {
        var aside = document.getElementById("aside" + windowID);
        aside.innerHTML = "testar bara att skiten funkar!!!!";
        //var ddd = new XMLHttpRequest();
        this.setXhr();
        this.rState();
        this.getXhr().open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        this.getXhr().send(null);
        return false;

    };
    this.getJSONParse = function (object) {
        var xxx = this.rState()
        var json = JSON.stringify(xxx);
        console.log("json" + json);
        return false;
    }
    this.rState = function () {
        var xhr = this.getXhr();
        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    _JsonXhr = JSON.parse(xhr.responseText);
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