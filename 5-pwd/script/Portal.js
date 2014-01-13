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
PWD.Portal = {
    
    positionY: 50,
    positionX: 50,
    ObjectArray: [],

    init: function () {
        PWD.Portal.onClick();
    },
   
    onClick: function () {
       
        var navOnclick = document.getElementById("nav");
        navOnclick.addEventListener("click", function (e) {
            var currentWindowID = e.target.parentNode.id;
            PWD.Portal.generateWindow(currentWindowID);
        }, false);

    },
    
    CloseWindow: function (win) {
        for (var i = 0; i < this.ObjectArray.length; i++) {
            if (win == this.ObjectArray[i]) {
                clearInterval(win.ajaxInterval);
                var article = win.getArticle();
                article.parentElement.removeChild(article);
                this.ObjectArray.splice(i, 1);
                PWD.Portal.position -= 10;
            }
        }
        
    },

    generateWindow: function (currentWindowID) {
 
       
        var winHandlerConstructor = PWD.WinHandler.WinHandler;
        var winHandler = new winHandlerConstructor();
        var article = winHandler.getArticle();
        this.ObjectArray.push(winHandler);
        
        this.positionY += 50;
        this.positionX += 50;

        if (this.positionX > window.innerWidth - article.offsetWidth - 25) {
            this.positionX = 50;
        }
        if (this.positionY > window.innerHeight - article.offsetHeight - 25) {
            this.positionY = 50;
        }

        article.style.top = this.positionY + "px";
        article.style.left = this.positionX + "px";

        if (currentWindowID === "app1") {

            var memoryConstructor = PWD.Classes.MemoryGame;
            var memory = new memoryConstructor(winHandler);
            memory.init(4, 4);
            winHandler.setWindowName("Memory", "pics/memory.png");
        }
        if (currentWindowID === "app3") {
            var adress = 'http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/';
            var galleryConstructor = PWD.Classes.Gallery;
            var gallery = new galleryConstructor(winHandler);
            gallery.init(adress);
            winHandler.setWindowName("Gallery", "pics/gallery.png");
            winHandler.loadingGif(null);
        }
        if (currentWindowID === "app4") {
            var expressen = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=" + escape("http://expressen.se/rss/nyheter");
            var rssConstructor = PWD.Classes.RSSConstructor;
            var rss = new rssConstructor(expressen, winHandler);
            winHandler.setUppdateInterval(expressen, winHandler)
            winHandler.setWindowName("Expressen", "pics/expressen.png");
        }
        if (currentWindowID === "app5") {
            var aftonbladetSport = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=" + escape("http://www.aftonbladet.se/sportbladet/rss.xml");
            var rssConstructor = PWD.Classes.RSSConstructor;
            var rss = new rssConstructor(aftonbladetSport, winHandler);
            winHandler.setUppdateInterval(aftonbladetSport, winHandler)
            winHandler.setWindowName("Sportbladet", "pics/sportbladet.png");
            winHandler.loadingGif();
        }
    },

};
window.onload = function () {
   
    PWD.Portal.init();
};