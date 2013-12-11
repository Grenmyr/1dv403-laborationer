"use strict";
var MemoryApp = {
    cardArray : [],
    clicks : 0,
    prevCard :null,
    curCard : null,
    init: function(rows,cols){
        var pictureArray = RandomGenerator.getPictureArray(rows,cols);
        this.generateMemoryBoard(rows,cols, pictureArray);
   },
   
    generateMemoryBoard : function(rows,cols, pictureArray){
        
        var main = document.getElementById("main");
        var table = document.createElement("table");
        table.style.border = "1px solid";
        
        var index = 0; 
        var that = this; 
        
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            
            for (var x = 0; x < cols; x++) {
                // Anropar konstruktor, skickar med mitt element i arrayen med numret.
                //och that som ju e = this. dvs denna instansieringen.
                var card = new Card(pictureArray[index], that);
                // Trycker i mitt kort i aryen
                
                // för att kunna hämta ut td taggen till min tr via konstruktor.
                tr.appendChild(card.getTd());
                index+=1; 
            }
            table.appendChild(tr);
        }
        main.appendChild(table);
        
         console.log(main);
    },
    FlipCard : function(card){
       if(this.curCard !== null && this.prevcard !== null){
            return;
        }
        var that = this;
        this.clicks ++;
        console.log(this.clicks);
        if(this.clicks === 1)
        {
            this.prevcard = card;
            card.flip();
           return;
        }
        if (this.clicks === 2){
            this.curCard = card;
                card.flip();
               
        
        if(this.prevcard.getId() === this.curCard.getId()){
                that.clicks = 0;
                  that.curCard = null;
                    that.prevcard = null;
            }
        else{
                setTimeout(function(){
                that.prevcard.getReset();
                that.curCard.getReset();
                that.prevcard = null;
                that.curCard = null;
                }, 1000); 
            }
            console.log(this.clicks);
            that.clicks = 0;
            console.log(that.clicks);
        } 
        }
        
        };


window.onload = function(){
  MemoryApp.init(4,4);
};