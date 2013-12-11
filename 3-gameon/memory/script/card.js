"use strict";
function Card (cardID, thatCard) {
    // skapar all struktur.
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    a.appendChild(img);
    td.appendChild(a);
    // ger vårt spelbräde en baksida.
    img.src= "memory/pics/0.png";
    var that = this;
      
    a.onmousedown = function(){
        // När man trycker på musen skickar vi med *vilket kort (thatmemory) och anropar flipcard.
        img.src="memory/pics/"+ cardID +".png";  
        thatCard.FlipCard(that); 
    };
    
    this.getTd = function(){
        return td; 
        };
        this.getId = function (){
            return cardID;
        };
        this.flip = function (){
         return img.src="memory/pics/"+ cardID +".png";  
        };
        this.getReset = function (){
          return    img.src= "memory/pics/0.png";
        };
    
    }