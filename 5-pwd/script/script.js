"use strict";
var Portal = {
    count: 0,
    init: function () {
        this.onClick();
    },
    onClick: function () {
       
        var memoryOnClick = document.getElementById("app1");
        var MsgBoardOnClick = document.getElementById("app2");
        var galleryOnClick = document.getElementById("app3");
        
        
        memoryOnClick.addEventListener("click", function () {
            
            Portal.generateWindow(memoryOnClick.id);
            
        }, false);
        
        MsgBoardOnClick.addEventListener("click", function () {

            Portal.generateWindow(MsgBoardOnClick.id);

        }, false);
        galleryOnClick.addEventListener("click", function () {

            Portal.generateWindow(galleryOnClick.id);

        }, false);

    },
    close: function (windowId) {
        var removeField = document.getElementById("article"+windowId);
        removeField.parentNode.removeChild(removeField);


    },
    generateWindow: function (currentWindowID) {
        
        var that = this;
        this.count++;
        console.log(this.count);
        var myWindow = new MyWindow(that, this.count);
        if (currentWindowID === "app1") {
            var memoryApp = new MemoryApp();
            memoryApp.init(4, 4, this.count);
        }
        if (currentWindowID === "app2") {
            console.log("d� g�r vi hit");
            var messBoard = new Messageboard("kalle");
            messBoard.init(this.count);
        }
        if (currentWindowID === "app3") {
            var gallery = new Gallery();    
            gallery.init(this.count);
            //gallery.funktionsnamn();
            
        }
            
        
        
    },
    genwin: function () {


}


};
window.onload = function () {
    Portal.init();

};