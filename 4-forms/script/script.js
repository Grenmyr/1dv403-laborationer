"use strict";
var FormApp = {
    Init : function(){
        FormApp.Validator();
        FormApp.Submit();
        
       
      
    },
    
    olle : null,  
    OnSubmit : function(){
         var form = document.getElementById("form");
        form.onsubmit = function(e) {
          };
    },
    MsgExist: null,
     Submit : function (){
      
      
       
      
        var button = document.getElementById("button");
        
        button.addEventListener("click", function(){
                FormApp.Blur();
        },false);
        
    },
    
    Validator : function (){
        var fName = document.getElementById("firstName");
       
        fName.onblur = function(e){
                
              if(fName.value === "" || fName.value === null){
                    
                if(!this.MsgExist){
                    FormApp.SetError(2, "fnDiv");
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
                    FormApp.SetError(2, "lnDiv");
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
                    FormApp.SetError(3, "eMailDiv");
                    this.MsgExist=true;
                } 
            }
            else{
                var tag = document.getElementById("id3");
                tag.parentNode.removeChild(tag);
                
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
                
                
            }
            else{   
                if(!this.MsgExist){
                FormApp.SetError(4, "zipDiv");
                this.MsgExist=true;
                } 
            } 
        };
        return true;
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
        
       var errorMsg = document.querySelectorAll(".error");
       /*if(this.olle === null)
       {
       var fn = document.getElementById("firstName"); 
        fn.focus();
        return;
       }*/
       console.log(errorMsg);
       
        console.log(this.olle);
        console.log(errorMsg.length);
        console.log("gick hit");
        
        if(this.olle === null && errorMsg.length ===0){
            console.log("ajabaja här ska det bara va om allt e ok");
            
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