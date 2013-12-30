"use strict";
var MemoryApp = function (rows, cols, windowID) {
    var that = this;
    var save = true;
    var arry = null;
    var count = new Counter(null,null);

    this.init = function (rows, cols, windowID) {
        var pictureArray = RandomGenerator.getPictureArray(rows, cols);
        this.generateMemoryBoard(rows, cols, pictureArray, windowID);
        
        arry = pictureArray;
        
        return false;
    };

    this.generateMemoryBoard = function (rows, cols, pictureArray, windowID) {
        
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

                // f�r att kunna h�mta ut td taggen till min tr via konstruktor.
                tr.appendChild(card.getTd());
                index += 1;
            }
            table.appendChild(tr);
        }
        aside.appendChild(table);
      
    }
    this.FlipCard = function (card) {
        console.log(save);
        if (save === false) { return;}
       save = false;
        if (count.getClick() === 0) {
            card.flip();
            count.setClick();
            count.setPrevImg(card.getId())
            count.setPrevObj(card);
            save = true; 
            return;
        }
        
        card.flip();
        count.setClick();
        if (card.getId() === count.getPrevImg(card.getId())) {
            alert("succe");
            
        }
        else {
            save = true; 
            setTimeout(function () {
                count.getPrevObj();
                card.getReset();
                
                
                
            }, 1000);
           
        }
        
        
        
        
    }
    this.Flip = function () {

    }





};