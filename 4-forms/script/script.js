"use strict";
var FormApp = {
    Init : function(){
        FormApp.Submit();
    },
    
    olle : null,
    
    MsgExist: null,
    
    Submit : function (){
        var button = document.getElementById("button");
        
        button.addEventListener("click", function(){
                FormApp.Blur();
        },false);
        
    },
    
    Validator : function (){
        
        var fName = document.getElementById("firstName");
        fName.onblur = function(){
                
              if(fName.value === "" || fName.value === null){
                    
                if(!this.MsgExist){
                    FormApp.SetError(1, "fnDiv");
                    this.MsgExist=true;
              }
            } 
            else{
                var tag = document.getElementById("id1");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
                FormApp.olle++;
            }
         
           
        };
        var lName = document.getElementById("lastName");
        lName.onblur = function(){
            
            if( lName.value === "" ||  lName.value === null ){
                if(!this.MsgExist){
                    FormApp.SetError(2, "lnDiv");
                    this.MsgExist=true;
                    
                }
            }
             else{
                var tag = document.getElementById("id2");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
                FormApp.olle++;
            
                
            }
          
        };
        var eMail = document.getElementById("eMail");
        eMail.onblur = function (){
            
            
            if(!eMail.value.match(/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)|| eMail.value === ""){
                if(!this.MsgExist){
                    FormApp.SetError(3, "eMailDiv");
                    this.MsgExist=true;
                    
                } 
            }
            else{
                var tag = document.getElementById("id3");
                tag.parentNode.removeChild(tag);
                FormApp.olle++;
            }
          
        };
        var zipCode = document.getElementById("zipCode");
        zipCode.onblur = function (){
            
            
            var zipS = zipCode.value;
            
            if(zipS.match(/^\d{5}$/) || zipS.match(/^\d{3}[- ]\d{2}$/) || zipS.match(/^[SE]+\d{5}$/)|| zipS.match(/^[SE]+\d{3}[- ]\d{2}$/)|| zipS.match(/^[SE ]+(\d{3}[- ]\d{2}|\d{5})$/)){
               
               zipS=zipS.replace(/-/g,"");
               zipS=zipS.replace(/ /g,"");
               zipCode.value=zipS.replace(/SE/g,"");
                var tag = document.getElementById("id4");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
                FormApp.olle++;
                
                
            }
            else{   
                if(!this.MsgExist){
                FormApp.SetError(4, "zipDiv");
                this.MsgExist=true;
                } 
            } 
            
                
            
        };
        console.log("slutet");
        
    },
    SetError: function(idNumber, divName){
        var div = divName;
        div = document.getElementById(divName);
        var text = document.createTextNode("Du har glömt fylla i formulärdata");
        var small = document.createElement("small");
        small.setAttribute("id", "id"+idNumber);
        small.setAttribute("class", "error");
        small.appendChild(text);
        div.appendChild(small);
        FormApp.olle--;  
        
        
         
    },
    Blur : function (){
        FormApp.Validator(); 
        var errorMsg = document.querySelectorAll(".error");
        console.log(errorMsg);
        console.log("här loggar jag olle"+this.olle);
        console.log("här loggar jag errorlength"+errorMsg.length);
    },
    OnReset : function (){
    },
    Reset : function (){/* töm formuläret med denna efter gokänd data*/
    
    }
   
    };

window.onload = function(){
FormApp.Init();
 
};