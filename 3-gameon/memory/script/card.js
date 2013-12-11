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
      
    a.onclick = function(){
        // När man trycker på musen skickar vi med *vilket kort (thatmemory) och anropar flipcard.
        thatCard.FlipCard(that); 
    };
    
    this.getTd = function(){
        return td; 
        };
        this.getId = function (){
            return cardID;
        };
       
        this.flip = function (){
        a.onclick = null;
         return img.src="memory/pics/"+ cardID +".png";  
        };
        this.getReset = function (){
          a.onclick = function () {
              thatCard.FlipCard(that);
          };
           img.src= "memory/pics/0.png";
        };
    
    }