"use strict";
var MemoryApp = {
    
    init: function(rows,cols){
        MemoryApp.generateMemoryBoard(rows,cols);
        
      alert();
      
      var randomResult = RandomGenerator.getPictureArray(rows,cols);
      MemoryApp.randomizedArray(randomResult);
   },
   
    randomizedArray : function(randomresult){
        var pictureArray = randomresult;
        alert(pictureArray);
    },
    memoryBoard : function(rows,cols){
        
    },
    generateMemoryBoard : function(rows,cols){
        var main = document.getElementById("main");
        var table = document.createElement("table");
        var rowspan = document.createElement("tr");
        var colSpan = document.createElement("td");
        main.appendChild(table);
        
            
      
        for (var i = 0; i < rows; i++) {
            table.appendChild(rowspan);
            console.log("CP ROWSPAN DIN IDIOT");
            //console.log(rows);
            for (var x = 0; x < cols; x++) {
                table.appendChild(colSpan);
            }
        }
        
    }
};



window.onload = function(){
  MemoryApp.init(4,5);
};