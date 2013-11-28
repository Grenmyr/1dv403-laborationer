var Messageboard = {
    
    messagesArray: [],
    /*
    messageBox: function(){
     var div = document.createElement("div");
        div.id = "messageBox";
        div.class= "large-9 columns";
        document.getElementById("chatClient").insertBefore(div, document.getElementById("textArea"));
        document.getElementById('cont').appendChild(div);
    },
    */
    init: function(){
        var that = this;
        var sendButton = document.getElementById('send');
        // That = this, som ger mig en referens till mitt Messageboard Object. Den anonyma funktionen,är 
        // en referens till den funktionensom ska köra när eventet triggas.
        sendButton.addEventListener("click", function(e){
            that.Send(e);
        }, false);
    
    },
    
    Send : function(e){
        e.preventDefault();
        // Sparar texten i chatfönster till variabel
        var strText = document.getElementById("textArea").value;
        // Skickar min variabel och skickar tid till konstruktorn. och tilldelar variabeln message detta.
        var message = new Message(strText,new Date());
        // Tömmer min chat
        document.getElementById("textArea").value = "";
        
        // trycker in message till mitt objectArray sen skickar med message till min Rendermessage object.
        this.messagesArray.push(message);
        this.RenderMessage(message);
        
        // Här Skapar jag counter och presenterar den.
        var counter =this.messagesArray.length;
        var counterDiv = document.getElementById("messageCount");
        counterDiv.innerHTML= "Antal meddelanden " + counter;
        
    },
    
    DeleteFunction : function(f) {
            alert("hej");
        },
    RenderMessage : function(Dase){
        var div = document.getElementById("chatBox");
        var box = document.createElement("div");
        box.id = "messageBox"+ this.messagesArray.length;
        box.className = "messageBox";
        var pTag = document.createElement("p");
        var text = document.createTextNode(Dase);
        pTag.appendChild(text);
        var deleteButton = document.createElement("a");
        deleteButton.innerHTML= "ta bort";
        box.appendChild(deleteButton);
        box.appendChild(pTag);
        div.appendChild(box);
        deleteButton.addEventListener("click", this.DeleteFunction,false);
        
        
        
        
        
        return false;
    }
};

window.onload = function(){
    Messageboard.init();
    //Messageboard.messageBox();
};