"use strict";
var Gallery = function () {
    
    this.init = function (windowID) {
        var aside = document.getElementById("aside" + windowID);
        aside.innerHTML = "testar bara att skiten funkar!!!!";
        var xhr = new XMLHttpRequest()
        console.log(xhr);
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        console.log(xhr);
    }
}