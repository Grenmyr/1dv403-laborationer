var Messageboard = {
    
    messagesArray: [],
    
    init: function(){
        var that = this;
        var sendButton = document.getElementById('send');

        // Här kollar jag OM enter (13) trycks så kör vi istället send functionen genom den.
        document.addEventListener("keypress", function(e){
            var enterKey = e.keyCode;
            if (enterKey === 13){
               that.Send(e); 
            }
            },false);
        
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
        
        // trycker in mitt messageobjekt till mitt objectArray sen skickar med message till min Rendermessage object.
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

        // Sen anropar Messagecount så att vår antal meddelanden coutner sätts rätt efter arreyn slicats.
        this.UppdateMessageCount();
        
        // vi anropar vårt id i html koden "chatbox" --> sätter den till reloadChatBox.
        var reloadChatBox=document.getElementById('chatBox');
        // --> tömmer innhållet HTML div taggen "chatBox"
        reloadChatBox.innerHTML="";
        this.RenderAllMessages();
        return false;
    },
    
    TimeStamp: function(d, id){
           // Strippar av allt utom numret från vår messagebox och anropar vår array med alertfunktion o hämtar ut aktuell
           // tid för just när den messadgeboxen skrevs.
           var messageTimeStampId = id.replace('messageBox','');
           alert(this.messagesArray[messageTimeStampId].getDate());
    },
    
    RenderAllMessages: function(){
        // Element för element, så anropar han vår RenderMessage, som bygger upp våra chatobjekt igen. 
        // Andra argumentet "i" är en siffra som är arraynumret.
        for (var i =0; i< this.GetMessageCount(); i++){
            this.RenderMessage(this.messagesArray[i], i);
        }
    },
    
    RenderMessage : function(message, id){
        var that = this;
        // Här tilldelas variabler vilken typ av element de är i HTML koden.
        var messageBox = document.createElement("div");
        var pTagText = document.createElement("p");
        var pTagTime = document.createElement("p");
        var deleteButton = document.createElement("a");
        var checkTimeButton = document.createElement("a");
        var text = document.createTextNode(message.getHTMLtext());
        var time = document.createTextNode(message.getTimeText());
        // Alla andra elment skapar vi, men messagewindow variabel existerar o läses in från unikt id.
        var chatBox = document.getElementById("chatBox");
        
        // Sätter klassnamn till min messagebox
        messageBox.className = "messageBox";
        // Sätter unika id till min messabox eftersom det behövs för hålla ordning på vilket meddellande.
        messageBox.id = "messageBox" + id;
        
        // Här väljer jag var mina element ska ligga, ex messagebox ska läggas i min chatbox.
        chatBox.appendChild(messageBox);
        pTagText.appendChild(text);
        pTagTime.appendChild(time);
        messageBox.appendChild(deleteButton);
        messageBox.appendChild(pTagText);
        messageBox.appendChild(pTagTime);
        messageBox.appendChild(checkTimeButton);
        
        // Sätter sätter listener på deletebutton och använder that= this för kunna använda den utanför vår function.
        checkTimeButton.innerHTML= "Klockan";
        deleteButton.innerHTML= "ta bort";
        
        deleteButton.addEventListener("click", function(f){
            that.DeleteFunction(f, messageBox.id);
        },false);
        checkTimeButton.addEventListener("click", function(d){
            that.TimeStamp(d,messageBox.id );
        },false);
        return false;
    }
};

window.onload = function(){
    Messageboard.init();
    //Messageboard.messageBox();
};