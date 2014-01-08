"use strict";
function Card(cardID, thatCard, _windowID) {
    // skapar all struktur.
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    a.appendChild(img);
    td.appendChild(a);
    // ger v�rt spelbr�de en baksida.
    img.src = "pics/0.jpg";
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
        return img.src = "pics/" + cardID + ".jpg";
    };
    this.getReset = function () {
        a.onclick = function () {
            thatCard.FlipCard(that);
        };
        img.src = "pics/0.jpg";
    };
    this.getWinID = function () {
        return _windowID;
    }

}