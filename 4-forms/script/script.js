"use strict";
var FormApp = {
    Init : function(){
        FormApp.OnSubmit();
    
         
    },
    MsgExist: null,
    OnSubmit : function (){
        // när användaren trycker på skicka knappen trigga denna funktion.
        // kontrollera då formuläret, att det är godkänt, annars false.
        var form = document.getElementById("form");
        form.onsubmit = function(e) {
          };
        var fName = document.getElementById("firstName");
        fName.onblur = function(e){
           
              if(fName.value === "" || fName.value === null){
                    var fnDiv = document.getElementById("fnDiv");
                if(!this.MsgExist){
               
                    var text = document.createTextNode("Du har glömt fylla i formulärdata");
                    var small = document.createElement("small");
                    small.setAttribute("id", "id1");
                    small.setAttribute("class", "error");
                    
                    small.appendChild(text);   
                    fnDiv.appendChild(small);
                    
                    
                    this.MsgExist=true;
              }
            } 
            else{
                var tag = document.getElementById("id1");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
            }
            
        };
        var lName = document.getElementById("lastName");
        lName.onblur = function(){
            
            if( lName.value === "" ||  lName.value === null ){
                if(!this.MsgExist){
                    var lnDiv = document.getElementById("lnDiv");
                    var text = document.createTextNode("Du har glömt fylla i formulärdata");
                    var small = document.createElement("small");
                    small.setAttribute("id", "id2");
                    small.setAttribute("class", "error");
                    small.appendChild(text);   
                    lnDiv.appendChild(small);
                    
                    this.MsgExist=true;
                }
            }
             else{
                var tag = document.getElementById("id2");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
                
            }
            
        };
        var eMail = document.getElementById("eMail");
        eMail.onblur = function (){
            if(!eMail.value.match(/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)|| eMail.value === ""){
                if(!this.MsgExist){
                var mailDiv = document.getElementById("eMailDiv");
                var text = document.createTextNode("Du har glömt fylla i formulärdata");
                var small = document.createElement("small");
                small.setAttribute("id", "id3");
                small.setAttribute("class", "error");
                small.appendChild(text);   
                mailDiv.appendChild(small);
                
                this.MsgExist=true;
                } 
            }
            else{
                var tag = document.getElementById("id3");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
            }
        };
        
    },
    Blur : function (){},
    OnReset : function (){},
    Reset : function (){/* töm formuläret med denna efter gokänd data*/
    
    },
    Submit : function (){}
    };

window.onload = function(){
FormApp.Init();
 
};