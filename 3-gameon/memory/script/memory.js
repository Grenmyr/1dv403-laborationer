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
        table.style.border = "1px solid";
      
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
          
            for (var x = 0; x < cols; x++) {
                var img = document.createElement("img");
                img.src= "memory/pics/0.png";
                
                var a = document.createElement("a");
                a.href="olle";
                var td = document.createElement("td");
                a.appendChild(img);
                td.appendChild(a);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
         main.appendChild(table);
    }
};



window.onload = function(){
  MemoryApp.init(4,5);
};