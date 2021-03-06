"use strict";
var FormApp = {
    Init : function(){
        var form = document.getElementById("form");

        form.onsubmit = function(e){
            e.preventDefault();
            };
        
        
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
        if(FormApp.Trigger1 === true && FormApp.Trigger2 === true && FormApp.Trigger3 === true && FormApp.Trigger4 === true ){
            console.log("vill ej komma in här");
            FormApp.ConfirmWindow();
        }
    },
    ConfirmWindow : function (){
            var popup = document.getElementById('myModal');
            var popupExit = document.getElementById("popupExit");
            var popupAbort = document.getElementById("popupAbort");
            var sendagain = document.getElementById("KukKnapp");
            var backGroundWindow = document.createElement("div");
            var body =document.getElementById("body");
            var popupclass= popup.className;
        
            popup.setAttribute('class', popupclass+' showDiv');
            var div =document.createElement("div");
            div.setAttribute("id", "skit");
            div.setAttribute("class", "large-12 columns");
            backGroundWindow.setAttribute("id", "backGroundWindow");
            body.insertBefore(backGroundWindow, body.firstChild);
            popup.appendChild(div);
            
            FormApp.FieldValue("firstName", "Namn");
            FormApp.FieldValue("lastName", "Efternamn");
            FormApp.FieldValue("eMail", "Epost");
            FormApp.FieldValue("zipCode", "Postadress");
            FormApp.FieldValue("valueBar", "Prismodell");
            
        sendagain.addEventListener("click", function(){
                 document.getElementById("form").submit();
        },false);
            
        popupExit.addEventListener("click", function(){
                FormApp.ClearField();
        },false);
         popupAbort.addEventListener("click", function(){
                FormApp.ClearField();
               
        },false);
            
    },
    FieldValue : function (divtag, name){
            var skitdiv = document.getElementById('skit');
            var div =document.createElement("div");
            div.setAttribute("id", "tempDiv");
            
            var tagName = document.getElementById(divtag);
            var ptag = document.createElement("p");
            var text1 = document.createTextNode(name +":      " +tagName.value);
            skitdiv.appendChild(div);
            div.appendChild(ptag);
            ptag.appendChild(text1);
    },
    ClearField : function(){
        var popup = document.getElementById('myModal');
        var popupclass= popup.className;
        popupclass = popupclass.split(' ');
        popup.setAttribute('class', popupclass[0]+' hiddenDiv');
        var kukDiv = document.getElementById('skit');
        kukDiv.parentNode.removeChild(kukDiv);
        var removeField = document.getElementById('backGroundWindow');
        removeField.parentNode.removeChild(removeField);
        
    }
        
    };

window.onload = function(){
FormApp.Init();
 
};