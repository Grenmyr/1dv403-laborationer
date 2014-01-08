"use strict";
function Counter(_prevObject, _prevImg, _click, _prevClick) {
    
    _prevClick = 1;
    _click = 0;

    this.setPrevImg = function (number) {
        _prevImg = number;
    };
    this.getPrevImg = function (number) {
        return _prevImg;
    };
    this.setPrevObj = function (object) {
        _prevObject = object;
    };
    /*this.getPrevObj = function () {
                
        return _prevObject;
    }; tror det funkar utan*/
    this.getPrevObjReset = function () {
        _prevObject.getReset();
    };
    this.setClick = function (reset) {
        _click++;
        if (reset === true) {
            _prevClick++;
            setTimeout(function () {
                _click = 0;
            }, 1000);
        }
    };
    this.getClick = function () {
        return _click;
    };
    this.getPrevClick = function () {
        return _prevClick;
    };
}





