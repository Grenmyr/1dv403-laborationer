"use strict";
var FormApp = {
    Init : function(){
        FormApp.Validator();
        FormApp.Submit();
        //var fn = document.getElementById("firstName"); 
        //fn.focus();
        
    },
    errorMsg : 1,
  
    
    OnSubmit : function(){
         var form = document.getElementById("form");
        form.onsubmit = function(e) {
          };
    },
    MsgExist: null,
     Submit : function (){
       
      
       
       var errorMsg = document.querySelectorAll(".error");
        var button = document.getElementById("button");
        button.addEventListener("click", function(){
           
       
             
            if(errorMsg.length === 1)
            {
                FormApp.Blur();
            }
            
            
            
        },false);
        
    },
    
    Validator : function (){
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
                
            }
          
        };
        var zipCode = document.getElementById("zipCode");
        zipCode.onblur = function (){
            FormApp.Setter++;
            console.log("zipvalidation");
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
                var zipDiv = document.getElementById("zipDiv");
                if(!this.MsgExist){
                
                var text = document.createTextNode("Du har glömt fylla i formulärdata");
                var small = document.createElement("small");
                small.setAttribute("id", "id4");
                small.setAttribute("class", "error");
                small.appendChild(text);   
                zipDiv.appendChild(small);
                
                this.MsgExist=true;
                } 
                
                
            } 
            
        };
        return true;
    },
    Blur : function (){
      
        alert("ggg");
        
    },
    OnReset : function (){},
    Reset : function (){/* töm formuläret med denna efter gokänd data*/
    
    }
   
    };

window.onload = function(){
FormApp.Init();
 
};