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
    var ptag = document.createElement("p");

    article.setAttribute("class", "article");
    aside.setAttribute("id", "aside" + windowId);
    header.setAttribute("class", "winHeader");
    icon.setAttribute("class", "windowThumb");
    icon.setAttribute("src", "pics/1.png");
    exitButton.setAttribute("class", "exitButton");
    img.setAttribute("src", "pics/2.png");
    img.setAttribute("class", "exitImage");
    main.appendChild(article);

    article.style.top = position + "px";
    article.style.left = position + "px";

    main.appendChild(article);
    article.appendChild(header);
    header.appendChild(icon);
    header.appendChild(exitButton);
    exitButton.appendChild(img);
    article.appendChild(aside);
    footer.appendChild(ptag);
    article.appendChild(footer);
    // public interface
    var drag = new DragDrop(); 


    
     article.onmousedown = function (t) {
            var all = document.querySelectorAll(".article")
         for (var i = 0; i < all.length; i++) {
              all[i].style.zIndex = 1;
            }
           article.style.zIndex = 999;

       };


        exitButton.onclick = function () {
            Portal.onClosedWindow();
            article.parentElement.removeChild(article);

        };
        this.setWindowForImageView = function (Jsonobject) {
            aside.style.backgroundImage = "url('" + Jsonobject.URL + "')";
            var height = Jsonobject.height
            var width = Jsonobject.width
            aside.style.width = width + "px";
            aside.style.height = height + "px";
            //article.style.height = height + "px";
            article.style.width = width + "px";
            article.style.top = 25 + "px";
            article.style.left = 500 + "px";
        };


};

function DragDrop() {
    var dragging = null;
    console.log("drag");
    document.addEventListener("mousedown", handleEvent, false);
    document.addEventListener("mousemove", handleEvent, false);
    document.addEventListener("mouseup", handleEvent, false);
    //return {
    //    enable: function (){
    //        document.addEventListener("mousedown", handleEvent, false);
    //        //eventUntil.addHandler(document, "mouseDown", handleEvent);
    //        //eventUntil.addHandler(document, "mouseMove", handleEvent);
    //        //eventUntil.addHandler(document, "mouseUp", handleEvent);
    //    },

    //    disable: function (){
    //        eventUtil.removeHandler(document, "mouseDown", handleEvent);
    //        eventUtil.removeHandler(document, "mouseMove", handleEvent);
    //        eventUtil.removeHandler(document, "mouseUp", handleEvent);
    //    }
    //}


    function handleEvent(event) {
        //get event and target
        //event = eventUtil.getEvent(event);
        var target = event.target;
        var mouseStartX = 0; 
        var mouseStartY = 0;

        //determine the type of event
        switch (event.type) {
            case "mousedown":
                if (target.className.indexOf("winHeader") > -1) {
                    console.log("hit");
                    dragging = target;
                    mouseStartX = event.clientX;
                    mouseStartY = event.clientY;

                }
                console.log(event.target);
                break;

            case "mousemove":
                if (dragging !== null) {
                    //assign location
                    dragging.parentNode.style.left = event.clientX + "px";
                    dragging.parentNode.style.top = event.clientY + "px";
                    console.log(+dragging.parentNode.style.top.replace(/[^0-9]/g, ''));
                    
                }
                break;

            case "mouseup":
                dragging = null;
                console.log("mouseup");
                break;
        }
    }
};

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
