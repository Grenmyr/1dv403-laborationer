"use strict";
function MyWindow(object, windowId) {
    var that = this;
    var main = document.getElementById("main");
    var article = document.createElement("article");
    var header = document.createElement("header");
    var icon = document.createElement("img");
    var exitButton = document.createElement("a");
    var img = document.createElement("img");
    var aside = document.createElement("aside");
    var footer = document.createElement("footer");
    
    
    article.setAttribute("id", "article"+windowId);
    aside.setAttribute("id", "aside"+windowId);
    header.setAttribute("class", "winHeader");
    icon.setAttribute("class", "windowThumb");
    icon.setAttribute("src","pics/1.png");
    exitButton.setAttribute("class", "exitButton");
    img.setAttribute("src", "pics/2.png");
    img.setAttribute("class", "exitImage");
    // ta bort sen
    aside.innerHTML = " HAHAHAHA denna CSS e priceless " + windowId;
    
    main.appendChild(article);   
    article.appendChild(header);
    header.appendChild(icon);
    header.appendChild(exitButton);
    exitButton.appendChild(img);
    article.appendChild(aside);
    article.appendChild(footer);


    exitButton.onclick = function () {
        article.parentElement.removeChild(article);
        //object.close(windowId)
    }
    this.getIddd = function () {
        return windowId;
    };
    this.setArticleBackground = function (Jsonobject, objNR) {
        article.style.backgroundImage = "url('" + Jsonobject[objNR].URL + "')"
    }
   


}
    


    /*var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    a.appendChild(img);
    td.appendChild(a);
    // ger vårt spelbräde en baksida.
    img.src = "memory/pics/0.png";
    var that = this;

    a.onclick = function () {
        // När man trycker på musen skickar vi med *vilket kort (thatmemory) och anropar flipcard.
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
