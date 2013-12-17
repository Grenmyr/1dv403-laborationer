"use strict";
var FormApp = {
    Init : function(){
        FormApp.OnSubmit();
         
    },
    OnSubmit : function (){
        // när användaren trycker på skicka knappen trigga denna funktion.
        // kontrollera då formuläret, att det är godkänt, annars false.
        var form = document.getElementById("form");
        form.onsubmit = function(e) {
          };
        var fName = document.getElementById("lastName");
        fName.onblur = function(){
              if(fName.value === "" || fName.value === null ){
              var lnDiv = document.getElementById("lnDiv");
              var text = document.createTextNode("Du har glömt fylla i formulärdata");
              var newDiv = document.createElement("div");
              
              newDiv.appendChild(text);   
              lnDiv.appendChild(newDiv);
            }  
            
        };
        var lName = document.getElementById("firstName");
        lName.onblur = function(){
              if( lName.value === "" ||  lName.value === null ){
              var fnDiv = document.getElementById("fnDiv");
              var text = document.createTextNode("Du har glömt fylla i formulärdata");
              var newDiv = document.createElement("div");
              
              newDiv.appendChild(text);   
              fnDiv.appendChild(newDiv);
            }  
            
        };
        
    },
    Blur : function (){},
    OnReset : function (){},
    Reset : function (){/* töm formuläret med denna efter gokänd data*/},
    Submit : function (){}
    };

window.onload = function(){
FormApp.Init();
 
};