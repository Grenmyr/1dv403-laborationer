"use strict";

PWD.Classes.MemoryGame = function (winHandler, prevCard, prevCardID) {
    var that = this;
    var prevClick = 1;
    var click = 0;

    var setClick = function (reset) {
        click++;
        if (reset === true) {
            prevClick++;
            setTimeout(function () {
                click = 0;
            }, 1000);
        }
    };
    // Här börjar koden för memoryspelet.
    this.init = function (rows, cols) {   
        var pictureArray = shuffleMemory(rows, cols);
        generateMemoryBoard(rows, cols, pictureArray);
    };
    function generateMemoryBoard(rows, cols, pictureArray) {
        var aside = winHandler.getAside();
        var table = document.createElement("table");      
        var index = 0;
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            for (var x = 0; x < cols; x++) {
                var CardConstructor = PWD.Classes.SubClasses.MemoryCard;
                var card = new CardConstructor(pictureArray[index], that);
           
                // forloop för ge varje kort unik spelsida och referens till that som är this. 
                tr.appendChild(card.getTd());
                index += 1;
            }
            table.appendChild(tr);
        }
        aside.appendChild(table);           
    }
    // Ehh genom låna funktionalitet av Card konstruktorn så jämför jag nuvarande kort med föregående.
    // jag sparar hela tiden undan föregående kortsom prevcard o prevcardID. sen jämförs bara föregående kort med nya.
    // lite buggfixar i denna funktionen också samt lite utskrift av försök o så.
    this.FlipCard = function (card) {
        if (click > 2) { return; }
        if (click === 0) {
            card.flip();
            setClick();
            prevCardID=card.getId();
            prevCard=card;
            return;
        }
        card.flip();
        setClick();
        if (card.getId() === prevCardID) {
            
        }
        else {
            setTimeout(function () {
                prevCard.getReset();
                card.getReset();
            }, 1000);
        }
        var p = winHandler.getFooterPtag();
        p.innerHTML = "Antal försök" + prevClick;
        return setClick(true);
    };
    // Johans shuffle funktion
    var shuffleMemory = function (rows, cols) {
        var numberOfImages = rows * cols;
        var maxImageNumber = numberOfImages / 2;

        var imgPlace = [];
        for (var i = 0; i < numberOfImages; i++)
            imgPlace[i] = 0;

        for (var currentImageNumber = 1; currentImageNumber <= maxImageNumber; currentImageNumber++) {
            var imageOneOK = false;
            var imageTwoOK = false;

            do {
                if (imageOneOK == false) {
                    var randomOne = Math.floor((Math.random() * (rows * cols - 0) + 0));

                    if (imgPlace[randomOne] == 0) {
                        imgPlace[randomOne] = currentImageNumber;
                        imageOneOK = true;
                    }
                }
                if (imageTwoOK == false) {
                    var randomTwo = Math.floor((Math.random() * (rows * cols - 0) + 0));

                    if (imgPlace[randomTwo] == 0) {
                        imgPlace[randomTwo] = currentImageNumber;
                        imageTwoOK = true;
                    }
                }
            }
            while (imageOneOK == false || imageTwoOK == false);
        }
        return imgPlace;
    };
};