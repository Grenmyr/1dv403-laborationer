"use strict";
PWD.Classes.Memory() = {
    clicks: 0,
    tries: 0,
    prevCard: null,
    curCard: null,   
    init: function (rows, cols, windowID) {      
        var pictureArray = RandomGenerator.getPictureArray(rows, cols);
        this.generateMemoryBoard(rows, cols, pictureArray, windowID);
    },

    generateMemoryBoard: function (rows, cols, pictureArray, windowID) {
        // här e jag måste skapa unikt id för aside me. fundera.
        var aside = document.getElementById("aside" + windowID);      
        var table = document.createElement("table");
        
        var index = 0;
        var that = this;

        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");

            for (var x = 0; x < cols; x++) {
                // Anropar konstruktor, skickar med mitt element i arrayen med numret.
                //och that som ju e = this. dvs denna instansieringen.
                var card = new Card(pictureArray[index], that, windowID);
                // Trycker i mitt kort i aryen

                // för att kunna hämta ut td taggen till min tr via konstruktor.
                tr.appendChild(card.getTd());
                index += 1;
            }
            table.appendChild(tr);
        }
        aside.appendChild(table);

        
    },
    FlipCard: function (card) {
        if (this.curCard !== null && this.prevcard !== null) {
            return;
        }

        var that = this;
        this.clicks++;
        if (this.clicks === 1) {
            this.prevcard = card;
            card.flip();
            return;
        }
        if (this.clicks === 2) {
            this.curCard = card;
            card.flip();

            if (this.prevcard.getId() === this.curCard.getId()) {
                that.clicks = 0;
                that.curCard = null;
                that.prevcard = null;

            }
            else {
                setTimeout(function () {
                    that.prevcard.getReset();
                    that.curCard.getReset();
                    that.prevcard = null;
                    that.curCard = null;
                }, 1000);
            }
            this.tries++;
            that.clicks = 0;
           
            console.log(card);
            
            this.AmountOfTries(this.tries);
            //console.log(that.countie);
            

           
        }
    },
    AmountOfTries: function (tries) {

        console.log(tries);

        




        /*var tryMessage = document.createElement("div");
        var p = document.createElement("p");
        var main = document.getElementById("main");

        p.innerHTML = "Försök " + tries;
        tryMessage.appendChild(p);
        main.appendChild(tryMessage);
        var that = this;
        //console.log(that.tries); // denna håller räkning och nås!!*/

        
        
        
        
        
        

        
       
    }
};
