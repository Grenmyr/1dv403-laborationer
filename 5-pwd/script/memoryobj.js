"use strict";

PWD.Classes.Memory = function (WinHandler,_prevObject, _prevImg, _click, _prevClick) {
    var that = this;
    _prevClick = 1;
    _click = 0;
    var setPrevImg = function (number) {
        _prevImg = number;
    };
    var getPrevImg = function (number) {
        return _prevImg;
    };
    var setPrevObj = function (object) {
        _prevObject = object;
    };
    var getPrevObjReset = function () {
        _prevObject.getReset();
    };
    var setClick = function (reset) {
        _click++;
        if (reset === true) {
            _prevClick++;
            setTimeout(function () {
                _click = 0;
            }, 1000);
        }
    };
    var getClick = function () {
        return _click;
    };
    var getPrevClick = function () {
        return _prevClick;
    };
    var shuffleMemory = function (rows, cols) {
        var numberOfImages = rows * cols;
        var maxImageNumber = numberOfImages / 2;

        var imgPlace = [];

        //Utplacering av bilder i Array
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
    }
    // Här börjar koden för memoryspelet.
    this.init = function (rows, cols) {

        var pictureArray = shuffleMemory(rows, cols);
        generateMemoryBoard(rows, cols, pictureArray);
    };
    function generateMemoryBoard(rows, cols, pictureArray) {
        
        WinHandler.getAside();
        var aside = WinHandler.getAside();
        var table = document.createElement("table");
        var pTagFooter = document.createElement("p");
        var index = 0;

        pTagFooter.setAttribute("id", "ClickCount");

        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            for (var x = 0; x < cols; x++) {
                var CardConstructor = PWD.Classes.SubClasses.Card;
                var card = new CardConstructor(pictureArray[index], that);
                // Anropar konstruktor, skickar med mitt element i arrayen med numret.
                //var card = new Card(pictureArray[index], that, windowID);
                // f�r att kunna h�mta ut td taggen till min tr via konstruktor.
                tr.appendChild(card.getTd());
                index += 1;
            }
            table.appendChild(tr);
        }
        aside.appendChild(table);
        aside.appendChild(pTagFooter);       
    }
    this.FlipCard = function (card) {

        if (getClick() > 2) { return; }
        if (getClick() === 0) {
            card.flip();
            setClick();
            setPrevImg(card.getId());
            setPrevObj(card);
            return;
        }
        card.flip();
        setClick();
        if (card.getId() === getPrevImg(card.getId())) {
            
        }
        else {
            setTimeout(function () {
                getPrevObjReset();
                card.getReset();
            }, 1000);
        }
        var aside = WinHandler.getAside();
        aside.nextElementSibling.firstChild.innerHTML = "antal Försök" + getPrevClick();
        return setClick(true);
    };
};