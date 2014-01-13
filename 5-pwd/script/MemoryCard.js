"use strict";
PWD.Classes.SubClasses.MemoryCard = function(cardID, thatReference) {
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    a.appendChild(img);
    td.appendChild(a);
    img.src = "pics/0.jpg";
    var that = this;
    a.onclick = function () {
        // vid klick på atag, skickar vi med that som referens, som ju är alla publika (this) funktioner.
        thatReference.FlipCard(that);
    };
    this.getTd = function () {
        return td;
    };
    this.getId = function () {
        return cardID;
    };
    this.flip = function () {
        // sätter onclick till null och retunerar ny URL till memoryt
        a.onclick = null;
        return img.src = "pics/" + cardID + ".jpg";
    };
    this.getReset = function () {
        a.onclick = function () {
            // Sätter tillbaka src till baksidan på kortet igen.
            thatReference.FlipCard(that);
        };
        img.src = "pics/0.jpg";
    };
    
}