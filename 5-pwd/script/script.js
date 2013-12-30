"use strict";
var Portal = {
    count: 0,
    init: function () {
        this.onClick();     
    },
    onClick: function () {
        
        var memoryOnClick = document.getElementById("app1");
        var MsgBoardOnClick = document.getElementById("app2");
        
        
        memoryOnClick.addEventListener("click", function () {
            
            Portal.generateWindow(memoryOnClick.id);
            
        }, false);
        
        MsgBoardOnClick.addEventListener("click", function () {

            Portal.generateWindow(MsgBoardOnClick.id);

        }, false);

    },
    close: function (windowId) {
        var removeField = document.getElementById("article"+windowId);
        removeField.parentNode.removeChild(removeField);


    },
    generateWindow: function (currentWindowID) {
        console.log(currentWindowID);
        
        var that = this;
        this.count++;
        var window = new Window(that, this.count);
        if (currentWindowID === "app1") {
            var memoryApp = new MemoryApp();
            memoryApp.init(4, 4, this.count);
        }
        else {
            console.log("d� g�r vi hit");
            var messBoard = new Messageboard("kalle");
            messBoard.init(this.count);
        }
        
    },
    genwin: function () {


}


};
window.onload = function () {
    Portal.init();

};