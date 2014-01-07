"use strict";
var Portal = {
    count: 0,
    position:40,
    init: function () {
        this.onClick();
    },
    onClick: function () {
       
        var memoryOnClick = document.getElementById("app1");
        var MsgBoardOnClick = document.getElementById("app2");
        var galleryOnClick = document.getElementById("app3");
        var RSSOnClick = document.getElementById("app4");
        
        
        memoryOnClick.addEventListener("click", function () {
            
            Portal.generateWindow(memoryOnClick.id);
            
        }, false);
        
        MsgBoardOnClick.addEventListener("click", function () {

            Portal.generateWindow(MsgBoardOnClick.id);

        }, false);
        galleryOnClick.addEventListener("click", function () {

            Portal.generateWindow(galleryOnClick.id);

        }, false);

        RSSOnClick.addEventListener("click", function () {

            Portal.generateWindow(RSSOnClick.id);

        }, false);

    },
    close: function (windowId) {
        var removeField = document.getElementById("article"+windowId);
        removeField.parentNode.removeChild(removeField);


    },
    generateWindow: function (currentWindowID) {
        
        var that = this;
        this.count++;
        this.position += 10;
        if (this.position > 400) {
            this.position = 60;
        }
        
        
        var myWindow = new MyWindow(this.count, this.position);
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
            var adress = 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/';
            var gallery = new Gallery();    
            gallery.init(this.count, adress,"gallery");
                    
        }
        if (currentWindowID === "app4") {
            var adressen1 = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");
            var gallery = new Gallery();
            gallery.init(this.count, adressen1);
                  
        }
        if (currentWindowID === "fullSizeImage") {
            return myWindow;
        }

    },
    onClosedWindow: function () {
   
        this.position -= 10;
    },
    genwin: function () {
        console.log();

}


};
window.onload = function () {
    Portal.init();

};