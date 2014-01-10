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
PWD.namespace('Gallery');
PWD.namespace('Classes');
PWD.namespace('WinHandler');
PWD.namespace('Classes.SubClasses')
var Portal = {
    count: 0,
    positionY: 50,
    positionX: 50,

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
        this.count++;
        
        var winHandlerConstructor = PWD.WinHandler.WinHandler;
        var WinHandler = new winHandlerConstructor(this.count, this.position, this.positionx);
        //var myWindow = new MyWindow(this.count, this.position, this.positionx);

        var article = WinHandler.getArticle();
 
        this.positionY += 50;
        this.positionX += 50;
        if (this.positionX > window.innerWidth-article.offsetWidth) {
            this.positionX = 50;
        }
        if (this.positionY > window.innerHeight-article.offsetHeight) {
            this.positionY = 50;
        }
        article.style.top = this.positionY + "px";
        article.style.left = this.positionX + "px";


        if (currentWindowID === "app1") {
            console.log(PWD);
            var memoryConstructor = PWD.Classes.Memory;
            var Memory = new memoryConstructor()
            Memory.init(4, 4, this.count);
        }
        if (currentWindowID === "app2") {
            var messBoardConstructor = PWD.Classes.MessBoard;
            var messBoard = new messBoardConstructor();
            messBoard.init(this.count);
        }
        if (currentWindowID === "app3") {
            var adress = 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/';
            var galleryConstructor = PWD.Gallery.Test;
            
            var gallery = new galleryConstructor();

            console.log(gallery);
            
            gallery.init(this.count, adress, "gallery", "POST");
            gallery.methodName();
        }
        if (currentWindowID === "app4") {
            var adressen1 = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");
            var galleryConstructor = PWD.Gallery.Test;
            var gallery = new galleryConstructor();
            gallery.init(this.count, adressen1,"olle","GET");          
        }
        if (currentWindowID === "fullSizeImage") {
            return WinHandler;
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