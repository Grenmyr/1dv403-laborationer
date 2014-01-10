"use strict";

var MemoryApp = function () {
    var that = this;
    var count = new Counter();

    this.init = function (rows, cols, windowID) {

        var pictureArray = RandomGenerator.getPictureArray(rows, cols);
        generateMemoryBoard(rows, cols, pictureArray, windowID);
    };

      function generateMemoryBoard (rows, cols, pictureArray, windowID) {

        var aside = document.getElementById("aside" + windowID);
        var table = document.createElement("table");
        var pTag = document.createElement("p");
        var index = 0;

        pTag.setAttribute("id", "ClickCount" + windowID);

        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            for (var x = 0; x < cols; x++) {
                // Anropar konstruktor, skickar med mitt element i arrayen med numret.
                var card = new Card(pictureArray[index], that, windowID);
                // f�r att kunna h�mta ut td taggen till min tr via konstruktor.
                tr.appendChild(card.getTd());
                index += 1;
            }
            table.appendChild(tr);
        }
        aside.appendChild(table);
        aside.appendChild(pTag);
    }
    this.FlipCard = function (card) {

        if (count.getClick() > 2) { return; }
        if (count.getClick() === 0) {
            card.flip();
            count.setClick();
            count.setPrevImg(card.getId());
            count.setPrevObj(card);
            return;
        }
        card.flip();
        count.setClick();
        if (card.getId() === count.getPrevImg(card.getId())) {
            
        }
        else {
            setTimeout(function () {
                count.getPrevObjReset();
                card.getReset();
            }, 1000);
        }
        var aside = document.getElementById("aside" + card.getWinID());
        aside.nextElementSibling.firstChild.innerHTML = "antal Försök" + count.getPrevClick();
        return count.setClick(true);
    };
};