"use strict";
function MyWindow(windowId, position) {
    var that = this;
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
    
    article.onmousedown = function () {
        var all = document.querySelectorAll(".article")
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
    }
    exitButton.onclick = function () {
        Portal.onClosedWindow();
        article.parentElement.removeChild(article);
    };

    this.setWindowForImageView = function (Jsonobject) {
        
        
        aside.style.backgroundImage = "url('" + Jsonobject.URL + "')";
        if (Jsonobject.height > 500) {
            Jsonobject.height = 500;
        }
        var height = Jsonobject.height;
        
        
      
        var width = Jsonobject.width
        aside.style.width = width + "px";
        aside.style.height = height + "px";
        article.style.width = width + "px";
        article.style.top = 25 + "px";
        article.style.left = 500 + "px";
        
    };

    var DragDrop = function () {
    
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
                        console.log(event.clientX)
                        dragging = target;
                        diffX = event.clientX - article.offsetLeft;
                        diffY = event.clientY - article.offsetTop;

                        
                    }
                    break;

                case "mousemove":
                    if (dragging !== null) {
                        //assign location (window.innerwidth)
                        //console.log(window.innerWidth)
                        /*if ((event.clientY -diffY) < 25) {
                            dragging.parentNode.style.top = 25 + "px";
                            break;
                        }
                        if ((event.clientX - diffX) < 2) {

                            dragging.parentNode.style.left = 2 + "px";
                            break;
                        }
                        if (event.clientY - diffY > 840 - article.offsetHeight) {
                           
                            dragging.parentNode.style.top = 840- article.offsetHeight+"px";
                            break;
                        }
                        
                        
                        if (event.clientX - diffX > 1600 - article.offsetWidth) {
                            dragging.parentNode.style.left = 1600 - article.offsetWidth + "px";
                            break;
                        }*/

                        if ((event.clientY - diffY) < (840 - article.offsetHeight) && (event.clientY - diffY) > 25) {
                            
                            dragging.parentNode.style.top = (event.clientY - diffY) + "px";
                        }
                        if ((event.clientX - diffX < 1600 - article.offsetWidth) && (event.clientX - diffX) > 2) {
                            dragging.parentNode.style.left = (event.clientX - diffX) + "px";
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

    // public interface



};


//var DragDrop = function () {
    
//    var dragging = null,
//        // initialize variables used later for checking difference in mouse and target position.
//        diffX = 0,
//        diffY = 0;
    
//    function handleEvent(event,test) {
//        console.log(test)
        
//        var target = event.target;
//        //determine the type of event
//        switch (event.type) {
//            case "mousedown":
//                if (target.className.indexOf("winHeader") > -1) {
                    
//                    dragging = target;
//                    diffX = event.clientX - dragging.parentNode.offsetLeft;
//                    diffY = event.clientY - dragging.parentNode.offsetTop;
//                }
//                break;

//            case "mousemove":
//                if (dragging !== null) {
//                    //assign location (window.innerwidth)
//                    if ((event.clientY -diffY) < 0) {
//                        dragging.parentNode.style.top = 0 + "px";
//                        break;
//                    }
//                    if ((event.clientY -diffY)> 400) {
//                        console.log(event.clientY - diffY);
//                        dragging.parentNode.style.top = 400 + "px";
//                        break;
//                    }
//                    if ((event.clientX - diffX) < 0) {

//                        dragging.parentNode.style.left = 0 + "px";
//                        break;
//                    }
//                    if ((event.clientX - diffX) > 880) {
//                        console.log(event.clientX-diffX)
//                        dragging.parentNode.style.left = 880 + "px";
//                        break;
//                    }

//                    dragging.parentNode.style.left = (event.clientX - diffX) + "px";
//                    dragging.parentNode.style.top = (event.clientY - diffY) + "px";


//                }

//                break;

//            case "mouseup":
//                dragging = null;

//                break;
//        }
//    };

//    return {
//        enable: function () {
//            document.addEventListener("mousedown", handleEvent, false);
//            document.addEventListener("mousemove", handleEvent, false);
//            document.addEventListener("mouseup", handleEvent, false);
//        },

//        disable: function () {
//            document.removeEventListener("mousedown", handleEvent, false);
//            document.removeEventListener("mousemove", handleEvent, false);
//            document.removeEventListener("mouseup", handleEvent, false);
//        }
//    }
//}();

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
