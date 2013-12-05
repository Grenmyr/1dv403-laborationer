"use strict";
var MemoryApp = {
    
    init: function(rows,cols){
     
    
      alert();
      
      var randomResult = RandomGenerator.getPictureArray(rows,cols);
      MemoryApp.randomizedArray(randomResult);
   },
   
    randomizedArray : function(randomresult){
        var olle = randomresult;
        alert(olle);
},
    memoryBoard : function(){
        
    }
};



window.onload = function(){
  MemoryApp.init(4,5);
};