"use strict";
var Gallery = function () {
    var xhr = new XMLHttpRequest()
    this.init = function (windowID) {
        var aside = document.getElementById("aside" + windowID);
        aside.innerHTML = "testar bara att skiten funkar!!!!";
        var xhr = new XMLHttpRequest()
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.onreadystatechange = function () {
            xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
            if (xhr.readyState === 4) {
                alert(xhr.readyState);
            }
            
            console.log("dasdsa" + xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true));
        }

        
        

        console.log(xhr)
        var dsadas = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
       
    }
}