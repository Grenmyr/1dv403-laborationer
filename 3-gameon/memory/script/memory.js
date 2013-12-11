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
        this.click=+1;
        if(this.click === 1)
        {
            this.prevcard = card;
            return;
        }
        if (this.click === 2){
            this.curCard = card;
            if(this.prevcard.getId() === this.curCard.getId()){
                console.log("fuck you");
            }
            else{
                this.prevcard.getReset();
                this.curCard.getReset();
            }
           
        }
        this.click = 0;
        MemoryApp.cardArray.push(card.getId());

        
    }
};

window.onload = function(){
  MemoryApp.init(4,4);
};