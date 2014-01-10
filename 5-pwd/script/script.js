'use strict';

var PWD = PWD || {};

PWD.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
    parent = PWD,
    i;
    // strip redundant leading global
    if (parts[0] === "PWD") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }
    return parent;
};
PWD.namespace('Classes');
PWD.namespace('WinHandler');
var Portal = {
    count: 0,
    position: 40,
    positionx:50,
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
    generateWindow: function (currentWindowID) {
        
        var that = this;
        this.count++;
        this.position += 10;
        this.positionx+= 10;
        if (this.positionx > 1400) {
            this.positionx = 60;
        }
        if (this.position > 400) {
            this.position = 60;
        }
        
        var myWindow = new MyWindow(this.count, this.position, this.positionx);
        if (currentWindowID === "app1") {
            console.log(PWD);
            var memoryApp = new MemoryApp();
            memoryApp.init(4, 4, this.count);
        }
        if (currentWindowID === "app2") {
            var messBoardConstructor = PWD.Classes.MessBoard;
            var messBoard = new messBoardConstructor();
            messBoard.init(this.count);
        }
        if (currentWindowID === "app3") {
            var adress = 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/';
            var galleryConstructor = PWD.Classes.Gallery;
            var gallery = new galleryConstructor();
            
            gallery.init(this.count, adress,"gallery");                  
        }
        if (currentWindowID === "app4") {
            var adressen1 = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");
            var galleryConstructor = PWD.Classes.Gallery;
            var gallery = new galleryConstructor();
            gallery.init(this.count, adressen1);          
        }
        if (currentWindowID === "fullSizeImage") {
            return myWindow;
        }
    },
    onClosedWindow: function () {
        this.position -= 10;
    },
    // ta bort sen
    genwin: function () {
        console.log();
}
};
window.onload = function () {
    Portal.init();

};