"use strict";
function MyWindow(windowId, position) {
    //console.log(object);
    //var that = this;
    var main = document.getElementById("main");
    var article = document.createElement("article");
    var header = document.createElement("header");
    var icon = document.createElement("img");
    var exitButton = document.createElement("a");
    var img = document.createElement("img");
    var aside = document.createElement("aside");
    var footer = document.createElement("footer");

    article.setAttribute("class", "article");
    aside.setAttribute("id", "aside" + windowId);
    header.setAttribute("class", "winHeader");
    icon.setAttribute("class", "windowThumb");
    icon.setAttribute("src", "pics/1.png");
    exitButton.setAttribute("class", "exitButton");
    img.setAttribute("src", "pics/2.png");
    img.setAttribute("class", "exitImage");
    main.appendChild(article);

    article.style.top = position+"px";
    article.style.left = position+"px";

    main.appendChild(article);
    article.appendChild(header);
    header.appendChild(icon);
    header.appendChild(exitButton);
    exitButton.appendChild(img);
    article.appendChild(aside);
    article.appendChild(footer);

    article.onclick = function () {
        var all = document.querySelectorAll(".article")
        for (var i = 0; i < all.length; i++) {
            all[i].style.zIndex = 1;
        }       
        article.style.zIndex = 999;      
    }

    exitButton.onclick = function () {
        Portal.onClosedWindow();
        article.parentElement.removeChild(article); 
    }
    this.setWindowForImageView = function (Jsonobject) {
        aside.style.backgroundImage = "url('" + Jsonobject.URL + "')";
        var height = Jsonobject.height
        var width = Jsonobject.width
        aside.style.width = width + "px";
        aside.style.height = height + "px";
        //article.style.height = height + "px";
        article.style.width = width + "px";
        article.style.top = 75  +"px";
        article.style.left = 500 + "px";
    }
   



}



/*var td = document.createElement("td");
var a = document.createElement("a");
var img = document.createElement("img");
a.appendChild(img);
td.appendChild(a);
// ger v�rt spelbr�de en baksida.
img.src = "memory/pics/0.png";
var that = this;

a.onclick = function () {
    // N�r man trycker p� musen skickar vi med *vilket kort (thatmemory) och anropar flipcard.
    thatCard.FlipCard(that);
};

this.getTd = function () {
    return td;
};

this.getId = function () {
    return cardID;
};

this.flip = function () {
    a.onclick = null;
    return img.src = "memory/pics/" + cardID + ".png";
};

this.getReset = function () {
    a.onclick = function () {
        thatCard.FlipCard(that);
    };
    img.src = "memory/pics/0.png";
};
*/
