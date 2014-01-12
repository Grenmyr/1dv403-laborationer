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
PWD.namespace('Classes.SubClasses')
var Portal = {
    positionY: 50,
    positionX: 50,

    init: function () {
        Portal.onClick();
    },
    onClick: function () {

        var navOnclick = document.getElementById("nav");

        navOnclick.addEventListener("click", function (e) {
            var currentWindowID = e.target.parentNode.id;
            Portal.generateWindow(currentWindowID);
        }, false);

    },
    generateWindow: function (currentWindowID) {
        var winHandlerConstructor = PWD.WinHandler.WinHandler;
        var WinHandler = new winHandlerConstructor();
        var article = WinHandler.getArticle();

        this.positionY += 50;
        this.positionX += 50;
        if (this.positionX > window.innerWidth - article.offsetWidth) {
            this.positionX = 50;
        }
        if (this.positionY > window.innerHeight - article.offsetHeight) {
            this.positionY = 50;
        }
        article.style.top = this.positionY + "px";
        article.style.left = this.positionX + "px";

        if (currentWindowID === "app1") {
           
            var memoryConstructor = PWD.Classes.Memory;
            var Memory = new memoryConstructor(WinHandler)
            Memory.init(4, 4);
        }
        /*if (currentWindowID === "app2") {
            var messBoardConstructor = PWD.Classes.MessBoard;
            var messBoard = new messBoardConstructor();
            messBoard.init(WinHandler);
        }*/
        if (currentWindowID === "app3") {
            var adress = 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/';
            var galleryConstructor = PWD.Classes.Gallery;          
            var gallery = new galleryConstructor(WinHandler);
            gallery.init( adress, "POST");
        }
        if (currentWindowID === "app4") {
            var dn = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");
            var rssConstructor = PWD.Classes.RssXHR;
            var rss = new rssConstructor(dn, WinHandler);
            WinHandler.setUppdateInterval(dn, WinHandler)
        }
        if (currentWindowID === "app5") {           
            var aftonbladetSport = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=" + escape("http://www.aftonbladet.se/sportbladet/rss.xml");
            var rssConstructor = PWD.Classes.RssXHR;
            var rss = new rssConstructor(aftonbladetSport, WinHandler);
            WinHandler.setUppdateInterval(aftonbladetSport, WinHandler)
            
        }
        if (currentWindowID === "fullSizeImage") {
            return WinHandler;
        }
    },
    onClosedWindow: function () {
        this.position -= 10;
    },
    
};
window.onload = function () {
    Portal.init();
};