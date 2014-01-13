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
    array:[],
    init: function () {
        PWD.onClick();
    },
    onClick: function () {

        var navOnclick = document.getElementById("nav");

        navOnclick.addEventListener("click", function (e) {
            
            var currentWindowID = e.target.parentNode.id;
            
            PWD.Portal.generateWindow(currentWindowID);
        }, false);

    },

    CloseWindow : function(win){
        for (var i = 0; i < this.array.length; i++) {
            if (win == this.array[i]) {
                clearInterval(win.interval);
                var article = win.getArticle();
                article.parentElement.removeChild(article);
                this.array.splice(i, 1);
            }
        }
        PWD.Portal.onClosedWindow();
    },

    generateWindow: function (currentWindowID) {
        if (currentWindowID == 0) { return; }

        var winHandlerConstructor = PWD.WinHandler.WinHandler;
        var WinHandler = new winHandlerConstructor();
        var article = WinHandler.getArticle();
        
        this.array.push(WinHandler);

        this.positionY += 50;
        this.positionX += 50;
        if (this.positionX > window.innerWidth - article.offsetWidth -25) {
            this.positionX = 50;
        }
        if (this.positionY > window.innerHeight - article.offsetHeight-25) {
            this.positionY = 50;
        }
        article.style.top = this.positionY + "px";
        article.style.left = this.positionX + "px";
       
        if (currentWindowID === "app1") {
           
            var memoryConstructor = PWD.Classes.MemoryGame;
            var Memory = new memoryConstructor(WinHandler);
            Memory.init(4, 4);
            WinHandler.setWindowName("Memory", "pics/memory.png");
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
            gallery.init(adress, "POST");
            WinHandler.setWindowName("Gallery", "pics/gallery.png");
        }
        if (currentWindowID === "app4") {
            var expressen = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://expressen.se/rss/nyheter");
            var rssConstructor = PWD.Classes.RssXHR;
            var rss = new rssConstructor(expressen, WinHandler);
            WinHandler.setUppdateInterval(expressen, WinHandler)
            WinHandler.setWindowName("Expressen", "pics/expressen.png");
        }
        if (currentWindowID === "app5") {           
            var aftonbladetSport = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=" + escape("http://www.aftonbladet.se/sportbladet/rss.xml");
            var rssConstructor = PWD.Classes.RssXHR;
            var rss = new rssConstructor(aftonbladetSport, WinHandler);
            WinHandler.setUppdateInterval(aftonbladetSport, WinHandler)
            WinHandler.setWindowName("Sportbladet", "pics/sportbladet.png");
        }
    },
    onClosedWindow: function () {
        this.position -= 10;
    },
    
};
window.onload = function () {
    PWD.Portal.init();
};