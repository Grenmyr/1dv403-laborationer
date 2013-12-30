"use strict";
function Counter(_prevObject, _prevImg, _click, _prevClick) {
    var that = this;
    
    _click = 0;
    
    this.setPrevImg = function (number) {
        _prevImg = number;
        console.log(_prevImg);
    }
    this.getPrevImg = function (number) {
        return _prevImg;
        console.log(_prevImg);
    }
    this.setPrevObj = function (object) {
        _prevObject = object;
        console.log(_prevObject);

    }
    this.getPrevObj = function () {
        console.log(_prevObject);
        _prevObject.getReset();
        return _prevObject;
    }
   
    this.setClick = function () {
        
        if (_click === 1) {
            _click = 0;
            console.log(_click);
            return;
        }
       
        _click++
        console.log(_click);
    }
    this.getClick = function () {
        return _click;
    }
    this.setPrevClick = function (value) {
        
        _prevClick = value;
    };

    
    
}
    

   


