"use strict";
PWD.WinHandler.WinHandler = function () {
    var that = this;
    var article = document.createElement("article");
    var header = document.createElement("header");
    var aIcon = document.createElement("a");
    var icon = document.createElement("img");
    var exitButton = document.createElement("a");
    var img = document.createElement("img");
    var aside = document.createElement("aside");
    var footer = document.createElement("footer");
    var pTagFooter = document.createElement("p");
    var pTagHeader = document.createElement("p");
    var ajaxGif = document.createElement("img");
    this.ajaxInterval = null;
    

    article.setAttribute("class", "article");
    header.setAttribute("class", "winHeader");
    icon.setAttribute("class", "windowThumb");
    ajaxGif.setAttribute("class", "loadingGif");
    exitButton.setAttribute("class", "exitButton");
    img.setAttribute("src", "pics/exitButton.png");
    img.setAttribute("class", "exitImage");
    pTagHeader.setAttribute("class", "ptagHeader");
    pTagFooter.setAttribute("class", "ptagFooter");
   
    footer.appendChild(ajaxGif);
    document.body.appendChild(article);
    article.appendChild(header);
    aIcon.appendChild(icon);
    header.appendChild(aIcon);
    header.appendChild(exitButton);
    header.appendChild(pTagHeader);
    exitButton.appendChild(img);
    article.appendChild(aside);
    footer.appendChild(pTagFooter);
    article.appendChild(footer);

    // funktionerna setWindowName, loadingGif, setUppdateInterval & setWindowForImageView anv�nds f�r modifiera gallery och RSS l�sare 
    this.setWindowName = function (name, iconSrc) {
        pTagHeader.innerHTML = name;
        icon.setAttribute("src", iconSrc);
    };
    this.loadingGif = function (alreadyLoaded) {

        if (alreadyLoaded === null) {
            this.timer = setTimeout(function () {
                ajaxGif.src = "pics/ajaxLoader.gif";
            }, 300);
        }
        else {
            clearTimeout(this.timer);
            ajaxGif.src = "";
        }
    };
    this.setUppdateInterval = function (aftonbladet, WinHandler) {
        this.ajaxInterval = setInterval(function () {
            var rssConstructor = PWD.Classes.RSSConstructor;
            var rss = new rssConstructor(aftonbladet, WinHandler);
        }, 10000);   
    };

    this.setWindowForImageView = function (Jsonobject) {
        var height = Jsonobject.height;
        var width = Jsonobject.width;
        
        aside.style.width = width + "px";
        aside.style.height = height + "px";       
        article.style.width = width + "px";
        aside.style.backgroundImage = "url('" + Jsonobject.URL + "')";
    };

   // Bara �ppna funktioner f�r i andra classer kunna trycka in grejjor i 
    this.getArticle = function () {
        return article;
    };
    this.getAside = function () {
        return aside;
    };
    this.getFooterPtag = function () {
        return pTagFooter;
    };
   // Anropar funktion i startscript f�r st�nga alla referenser.
    exitButton.onclick = function () {
        PWD.Portal.CloseWindow(that);
    };
    // S�tter Focus, och skapar och initierar dragFunktion. 
    article.onmousedown = function () {
        var all = document.querySelectorAll(".article");
        for (var i = 0; i < all.length; i++) {
            all[i].style.zIndex = 1;
        }
        article.style.zIndex = 999;
        var dragDrop = DragDrop();
        dragDrop.enable();
    };
    article.onmouseup = function () {
        var dragDrop = DragDrop();
        dragDrop.disable();
    };

    var DragDrop = function () {
        var dragging = null,
            // Detta �r skaml�st kopierat fr�n boken och sedan lite modifierat. Jag lyssnar onclick p� Target, och om det �r winHeader s� g�r det vidare till moemove. I mouseclick s�tts �ven kompensation f�r var musen befinner sig p� "winheader" classen. 
            diffX = 0,
            diffY = 0;

        function handleEvent(event, test) {

            var target = event.target;
            switch (event.type) {
                case "mousedown":
                    if (target.className.indexOf("winHeader") > -1) {
                        dragging = target;
                        diffX = event.clientX - article.offsetLeft;
                        diffY = event.clientY - article.offsetTop;
                    }
                    break;
                case "mousemove":
                    // Ett g�ng ifsatser, de tv� f�rsta till�ter drag inom min sk�rms bredd - lite marginal f�r border o s�.
                    // de andra fyra fixar bug om musen r�rs snabbt, och s�tter positionen till gr�nsv�rde om v�rde �ver gr�nsv�rde registrerats av mus.
                    // Min target att dra s�tter jag till min parentnode som �r min section.
                    if (dragging !== null) {

                        if ((event.clientY - diffY) < (window.innerHeight - article.offsetHeight) && (event.clientY - diffY) > 25) {
                            dragging.parentNode.style.top = (event.clientY - diffY) + "px";
                        }
                        if ((event.clientX - diffX < window.innerWidth - article.offsetWidth) && (event.clientX - diffX) > 25) {
                            dragging.parentNode.style.left = (event.clientX - diffX) + "px";
                        }
                        if ((event.clientY - diffY) < 25) {
                            dragging.parentNode.style.top = 25 + "px";
                        }
                        if ((event.clientX - diffX) < 0) {
                            dragging.parentNode.style.left = 0 + "px";
                        }
                        if (event.clientY - diffY > (window.innerHeight - article.offsetHeight - 25)) {
                            dragging.parentNode.style.top = (window.innerHeight - article.offsetHeight - 25) + "px";
                        }
                        if (event.clientX - diffX > window.innerWidth - article.offsetWidth) {
                            dragging.parentNode.style.left = (window.innerWidth - article.offsetWidth) + "px";
                        }
                    }
                    break;
                case "mouseup":
                    dragging = null;
                    break;
            }
        }
            // Fattar knappt dessa, men Zakas gjorde s� s� jag kopierade.
        return {
            enable: function () {
                document.addEventListener("mousedown", handleEvent, false);
                document.addEventListener("mousemove", handleEvent, false);
                document.addEventListener("mouseup", handleEvent, false);
            },

            disable: function () {
                document.removeEventListener("mousedown", handleEvent, false);
                document.removeEventListener("mousemove", handleEvent, false);
                document.removeEventListener("mouseup", handleEvent, false);
            }
        };
    };
};
