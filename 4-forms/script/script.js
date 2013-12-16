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
            alert("va?");
            //form.elements["text"];
            //console.log(form.elements["text"]);
        };
        if(!true){
            return false;
        }
    },
    OnReset : function (){},
    Reset : function (){/* töm formuläret med denna efter gokänd data*/},
    Submit : function (){}
    };

window.onload = function(){
FormApp.Init();
 
};