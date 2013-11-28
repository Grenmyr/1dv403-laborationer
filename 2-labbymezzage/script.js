var Messageboard = {
    
    messagesArray: [],
    
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
        var objMessage = new Message(strText,new Date());
        // Tömmer min chat
        document.getElementById("textArea").value = "";
        
        // trycker in message till mitt objectArray sen skickar med message till min Rendermessage object.
        this.messagesArray.push(objMessage);
        this.RenderMessage(objMessage, (this.GetMessageCount()-1));
        this.UppdateMessageCount();

    },
    UppdateMessageCount: function(){
        // Här Skapar jag counter och presenterar den.
         var counterDiv = document.getElementById("messageCount");
        counterDiv.innerHTML= "Antal meddelanden " + this.GetMessageCount();
    },
    GetMessageCount: function(){
        return this.messagesArray.length;
    },
    DeleteFunction : function(f,boxid) {
        var id = boxid.replace('messageBox','');
        this.messagesArray.splice(id,1);
        this.UppdateMessageCount();
        var div2=document.getElementById('chatBox');
        div2.innerHTML="";
        this.RenderAllMessages();
        return false;
    },
    
    RenderAllMessages: function(){
        for (var i =0; i< this.GetMessageCount(); i++){
            this.RenderMessage(this.messagesArray[i], i);
        }
    },
    
    RenderMessage : function(message, id){
        var that = this;
        var div = document.getElementById("chatBox");
        var box = document.createElement("div");
        box.id = "messageBox" + id;
        box.className = "messageBox";
        var pTagText = document.createElement("p");
        var pTagTime = document.createElement("p");
        var text = document.createTextNode(message.getHTMLtext());
        var time = document.createTextNode(message.getTimeText());
        pTagText.appendChild(text);
        pTagTime.appendChild(time);
        var deleteButton = document.createElement("a");
        deleteButton.innerHTML= "ta bort";
        box.appendChild(deleteButton);
        box.appendChild(pTagText);
        box.appendChild(pTagTime);
        div.appendChild(box);
        deleteButton.addEventListener("click", function(f){
            that.DeleteFunction(f, box.id)
        },false);
        return false;
    }
};

window.onload = function(){
    Messageboard.init();
    //Messageboard.messageBox();
};