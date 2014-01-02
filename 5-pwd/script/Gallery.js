"use strict";
var Gallery = function () {
    
    this.init = function (windowID) {
        var aside = document.getElementById("aside" + windowID);
        aside.innerHTML = "testar bara att skiten funkar!!!!";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                    alert(xhr.responseText);
                }
                else {
                    console.log("fell");
                }
            }
        };
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
       
        
        //var json = JSON.parse("get","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/pics",true);
       // console.log(json);
       
    };
};