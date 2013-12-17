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
        var fName = document.getElementById("firstName");
        fName.onblur = function(e){
            
              if(fName.value === "" || fName.value === null ){
              var fnDiv = document.getElementById("fnDiv");
              var text = document.createTextNode("Du har glömt fylla i formulärdata");
              var newDiv = document.createElement("div");
              console.log(FormApp.count);
              newDiv.appendChild(text);   
              fnDiv.appendChild(newDiv);
              newDiv.setAttribute("id", "id1");
            } 
            else{
                var tag = document.getElementById("id1");
                tag.parentNode.removeChild(tag);
            }
            
        };
        var lName = document.getElementById("lastName");
        lName.onblur = function(){
            
              if( lName.value === "" ||  lName.value === null ){
              var lnDiv = document.getElementById("lnDiv");
              var text = document.createTextNode("Du har glömt fylla i formulärdata");
              var newDiv = document.createElement("div");
              
              newDiv.appendChild(text);   
              lnDiv.appendChild(newDiv);
              
            }  
            
        };
        var eMail = document.getElementById("eMail");
        eMail.onblur = function (){
            if(!eMail.value.match(/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)|| eMail.value === ""){
                var mailDiv = document.getElementById("eMailDiv");
                var text = document.createTextNode("Du har glömt fylla i formulärdata");
                var newDiv = document.createElement("div");
              
                newDiv.appendChild(text);   
                mailDiv.appendChild(newDiv);
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