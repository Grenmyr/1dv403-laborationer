"use strict";
PWD.WinHandler.WinHandler = function ( _interval) {
    var that = this;
    var main = document.getElementById("main");
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

    this.setWindowForImageView = function (Jsonobject) {
        
        var div = document.createElement("div");
        var height = Jsonobject.height;
        var width = Jsonobject.width
        //aside.appendChild(div);
        aside.style.width = width + "px";
        aside.style.height = height + "px";
        //article.style.height = height + "px";
        article.style.width = width + "px";
        aside.style.backgroundImage = "url('" + Jsonobject.URL + "')";
    };

    article.onmousedown = function () {
        var all = document.querySelectorAll(".article")
        for (var i = 0; i < all.length; i++) {
            all[i].style.zIndex = 1;
        }
        article.style.zIndex = 999;

        var dragDrop = DragDrop(article);
        dragDrop.enable();
    };
    article.onmouseup = function () {
        var dragDrop = DragDrop();
        dragDrop.disable();
        //var här

    }
    exitButton.onclick = function () {
        Portal.onClosedWindow();
        article.parentElement.removeChild(article);
        clearInterval(_interval);


    };
    this.getArticle = function () {
        return article;
    }
    this.getAside = function () {
        return aside;
    }
    this.getFooterPtag = function () {
        return pTagFooter;
    }
    this.setWindowName = function (name,iconSrc) {
        pTagHeader.innerHTML = name;
        icon.setAttribute("src", iconSrc);
    }
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


    }
    this.setUppdateInterval = function (aftonbladet, WinHandler) {
        var interval = setInterval(function () {
            var rssConstructor = PWD.Classes.RssXHR;
            var rss = new rssConstructor(aftonbladet, WinHandler);
        }, 300000);
        _interval = interval;

    }
    


    var DragDrop = function () {
        console.log(article.offsetWidth)
        var dragging = null,
            // initialize variables used later for checking difference in mouse and target position.
            diffX = 0,
            diffY = 0;

        function handleEvent(event, test) {

            var target = event.target;
            //determine the type of event
            switch (event.type) {
                case "mousedown":

                    if (target.className.indexOf("winHeader") > -1) {
                        dragging = target;
                        diffX = event.clientX - article.offsetLeft;
                        diffY = event.clientY - article.offsetTop;
                    }
                    break;
                case "mousemove":
                    if (dragging !== null) {
                        //assign location (window.innerwidth)
                        //console.log(window.innerWidth)

                        if ((event.clientY - diffY) < (window.innerHeight - article.offsetHeight) && (event.clientY - diffY) > 25) {
                            dragging.parentNode.style.top = (event.clientY - diffY) + "px";
                        }
                        if ((event.clientX - diffX < window.innerWidth - article.offsetWidth) && (event.clientX - diffX) > 0) {
                            dragging.parentNode.style.left = (event.clientX - diffX) + "px";
                        }
                        if ((event.clientY - diffY) < 25) {
                            dragging.parentNode.style.top = 25 + "px";
                        }
                        if ((event.clientX - diffX) < 0) {
                            dragging.parentNode.style.left = 0 + "px";
                        }
                        if (event.clientY - diffY > window.innerHeight - article.offsetHeight) {
                            dragging.parentNode.style.top = window.innerHeight - article.offsetHeight + "px";
                        }
                        if (dragging.parentNode.style.left > window.innerWidth - article.offsetWidth) {
                            dragging.parentNode.style.left = window.innerWidth - article.offsetWidth + "px";
                        }
                    }
                    break;
                case "mouseup":
                    dragging = null;
                    break;
            }
        };

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
        }
    };
};
