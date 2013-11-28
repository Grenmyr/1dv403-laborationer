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
        // Skickar min strängvariabel och skickar tid till konstruktorn med tid. och tilldelar variabeln objmessage detta.
        var objMessage = new Message(strText,new Date());
        // Tömmer min chat
        document.getElementById("textArea").value = "";
        
        // trycker in mutt messageobjekt till mitt objectArray sen skickar med message till min Rendermessage object.
        this.messagesArray.push(objMessage);
        this.RenderMessage(objMessage, (this.GetMessageCount()-1));
        this.UppdateMessageCount();

    },
    UppdateMessageCount: function(){
        // Här Skapar jag en function som anropar GetMessagecoutn och namnger mina div taggar.
         var counterDiv = document.getElementById("messageCount");
        counterDiv.innerHTML= "Antal meddelanden " + this.GetMessageCount();
    },
    GetMessageCount: function(){
        // Function som bara presenterar längden på arrayen.
        return this.messagesArray.length;
    },
    DeleteFunction : function(f,boxid) {
        // Functionen anropas från Rendermessage, och här ska jag ta bort elementet ur arrayen.
        // För göra det tar jag bort messagebox u strängen från boxid.
        var id = boxid.replace('messageBox','');
        this.messagesArray.splice(id,1);
        
        
        // vi anropar vårt id i html koden "chatbox" --> sätter den till reloadChatBox.
        
        
        // Sen anropar Messagecount så att vår antal meddelanden coutner sätts rätt efter arreyn slicats.
        this.UppdateMessageCount();
        // --> tömmer innhållet HTML div taggen "chatBox"
        var reloadChatBox=document.getElementById('chatBox');
        reloadChatBox.innerHTML="";
        this.RenderAllMessages();
        return false;
    },
    
    RenderAllMessages: function(){
        // Element för element, så anropar han vår RenderMessage, som bygger upp våra chatobjekt igen. 
        // Andra argumentet "i" är en siffra som är arraynumret.
        for (var i =0; i< this.GetMessageCount(); i++){
            this.RenderMessage(this.messagesArray[i], i);
        }
    },
    
    RenderMessage : function(message, id){
        // Måste strukturer om skiten här.
        var that = this;
        var messageWindow = document.getElementById("chatBox");
        var chatBox = document.createElement("div");
        //Skapar unikt id beroende på anropsnumret från Renderallmessages
        chatBox.id = "messageBox" + id;
        // sätter classname i HTML
        chatBox.className = "messageBox";
        // Skapar 2 Ptaggar 1 till textmeddelande och 1 till tiden o lägger ut dom.
        var pTagText = document.createElement("p");
        var pTagTime = document.createElement("p");
        var text = document.createTextNode(message.getHTMLtext());
        var time = document.createTextNode(message.getTimeText());
        pTagText.appendChild(text);
        pTagTime.appendChild(time);
        // skapar vår deleteknapp
        var deleteButton = document.createElement("a");
        deleteButton.innerHTML= "ta bort";
        chatBox.appendChild(deleteButton);
        chatBox.appendChild(pTagText);
        chatBox.appendChild(pTagTime);
        // Här läger jag min box i min chatbox
        messageWindow.appendChild(chatBox);
        deleteButton.addEventListener("click", function(f){
            that.DeleteFunction(f, chatBox.id);
        },false);
        return false;
    }
};

window.onload = function(){
    Messageboard.init();
    //Messageboard.messageBox();
};