"use strict";
var FormApp = {
    Init : function(){
        FormApp.Submit();
        FormApp.Validator(); 
    },
    Trigger1 : false,
    Trigger2 : false,
    Trigger3 : false,
    Trigger4 : false,
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
                FormApp.Trigger1 = false;
                if(!this.MsgExist){
                    FormApp.SetError(1, "fnDiv");
                    this.MsgExist=true;
              }
            } 
            else{
                FormApp.Trigger1 = true;
                var tag = document.getElementById("id1");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
            }
        };
        var lName = document.getElementById("lastName");
        lName.onblur = function(){
            
            if( lName.value === "" ||  lName.value === null ){
                FormApp.Trigger2 = false;
                if(!this.MsgExist){
                    FormApp.SetError(2, "lnDiv");
                    this.MsgExist=true;
                }
            }
             else{
                FormApp.Trigger2 = true; 
                var tag = document.getElementById("id2");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
            }
        };
        var eMail = document.getElementById("eMail");
        eMail.onblur = function (){
            
            if(!eMail.value.match(/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)|| eMail.value === ""){
                if(!this.MsgExist){
                    FormApp.Trigger3 = false;
                    FormApp.SetError(3, "eMailDiv");
                    this.MsgExist=true;
                } 
            }
            else{
                FormApp.Trigger3 = true; 
                var tag = document.getElementById("id3");
                tag.parentNode.removeChild(tag);
            }
        };
        var zipCode = document.getElementById("zipCode");
        zipCode.onblur = function (){
            var zipS = zipCode.value;
            if(zipS.match(/^\d{5}$/) || zipS.match(/^\d{3}[- ]\d{2}$/) || zipS.match(/^[SE]+\d{5}$/)|| zipS.match(/^[SE]+\d{3}[- ]\d{2}$/)|| zipS.match(/^[SE ]+(\d{3}[- ]\d{2}|\d{5})$/)){
               FormApp.Trigger4 = true;
               zipS=zipS.replace(/-/g,"");
               zipS=zipS.replace(/ /g,"");
               zipCode.value=zipS.replace(/SE/g,"");
                var tag = document.getElementById("id4");
                tag.parentNode.removeChild(tag);
                this.MsgExist = null;
            }
            else{   
                if(!this.MsgExist){
                FormApp.Trigger4 = false;    
                FormApp.SetError(4, "zipDiv");
                this.MsgExist=true;
                } 
            } 
        };
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
    },
    Blur : function (){
        FormApp.Validator(); 
        console.log(FormApp.Trigger1+"  loggar trigger1");
        console.log(FormApp.Trigger2+"  loggar trigger2");
        console.log(FormApp.Trigger3+"  loggar trigger3");
        console.log(FormApp.Trigger4+"  loggar trigger4");

        if(FormApp.Trigger1 === true && FormApp.Trigger2 === true && FormApp.Trigger3 === true && FormApp.Trigger4 === true ){
            console.log("vill ej komma in här");
        }
    },
    OnReset : function (){
    },
    Reset : function (){/* töm formuläret med denna efter gokänd data*/
    }
    };

window.onload = function(){
FormApp.Init();
 
};