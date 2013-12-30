
var Messageboard = function(divId){
    var messagesArray  = [];
    var that = this;
    
    // binder variabler till HTML taggar.
    var divMainWindow = document.createElement("div");
    var h1 = document.createElement("h1");
    var divChatbox = document.createElement("div");
    var divmessageCount = document.createElement("div");
    var textArea = document.createElement("textarea");
    var sendButton = document.createElement("button");
    
    this.init  = function(){
        // dunkar ut taggarnma i vilken ordning jag vill ha dem för varje unik chat.
        // Sätter även lite html klasser och texter till dem.
        document.querySelector("main").appendChild(divMainWindow);
        divMainWindow.className="large-5 columns";
        divMainWindow.id="mainWindow";
        h1.innerHTML= "Labby Message!";
        sendButton.innerHTML="skicka";
        
        divMainWindow.appendChild(h1);
        divMainWindow.appendChild(divChatbox);
        divMainWindow.appendChild(textArea);
        divMainWindow.appendChild(divmessageCount);
        divMainWindow.appendChild(sendButton);

        // Här kollar jag OM enter (13) trycks så kör vi istället send functionen genom den.
        textArea.addEventListener("keypress", function(e){
            var enterKey = e.keyCode;
            if (enterKey === 13 && !e.shiftKey){
               that.Send(e); 
            }
        },false);
        // Sendknappen väntar på tyck
        // That = this, som ger mig en referens till mitt Messageboard Object. 
        sendButton.addEventListener("click", function(e){
            that.Send(e);
            }, false);
        };
    
    this.Send = function(e){
        
        // Initierar min konstruktor och skickar in min chattext och tid som argument.
        var objMessage = new Message(textArea.value,new Date());
        // Tömmer min chat
        
        
        // trycker in mitt messageobjekt till mitt messagesarray
        messagesArray.push(objMessage);
        //sen skickar till min RenderMessagefunction för generering av chattext.
        //Som andra argument skickas en count på arrayen för hålla räkning.
        that.RenderMessage(objMessage, (that.GetMessageCount()-1));
        // skriver om hur många meddelanden.
        that.UppdateMessageCount();
        textArea.value="";
    };
    
    this.UppdateMessageCount = function(){
        // Här Skapar jag en function som anropar GetMessagecount och skiver text till min div
        // som håller räkningen på antalet meddelanden.
        divmessageCount.innerHTML= "Antal meddelanden " + that.GetMessageCount();
    };
    this.GetMessageCount = function(){
        // Function som bara presenterar längden på arrayen.
        return messagesArray.length;
    };
    this.DeleteFunction = function(f,boxid) {
        // Functionen anropas från Rendermessage, och här ska jag ta bort elementet ur arrayen.
        // Confirm 'r en inbyggd function med ok eller avbryt knapp, om ok så görs det automatiskt.
        if (!confirm("Vill du ta bort meddelandet?")){return;}

        // För göra det tar jag bort messagebox u strängen från boxid.
        var id = boxid.replace('messageBox','');
        messagesArray.splice(id,1);

        // Sen anropar Messagecount så att vår antal meddelanden coutner sätts rätt efter arreyn slicats.
        that.UppdateMessageCount();
        
        // vi anropar vårt id i html koden "chatbox" --> sätter den till reloadChatBox.
        var reloadChatBox=divChatbox;
        // --> tömmer innhållet HTML div taggen "chatBox"
        reloadChatBox.innerHTML="";
        // sen skriver vi om alla meddelanden igen.
        that.RenderAllMessages();
        return false;
    };

    this.TimeStamp = function(d, id){
        // Strippar av allt utom numret från vår messagebox och anropar vår array med alertfunktion o hämtar ut aktuell
        // tid för just när den messadgeboxen skrevs.
        var messageTimeStampId = id.replace('messageBox','');
        alert(messagesArray[messageTimeStampId].getDate());
    };
    
     this.RenderAllMessages = function(){
        // Element för element, så anropar han vår RenderMessage, som bygger upp våra chatobjekt igen. 
        // Andra argumentet "i" är en siffra som är arraynumret.
        for (var i =0; i< that.GetMessageCount(); i++){
            that.RenderMessage(messagesArray[i], i);
        }
    };
    
    this.RenderMessage = function(message, id){
        
        // Här tilldelas variabler vilken typ av element de är i HTML koden.
        var messageBox = document.createElement("div");
        var pTagText = document.createElement("p");
        var pTagTime = document.createElement("p");
        var deleteButton = document.createElement("a");
        var checkTimeButton = document.createElement("a");
        var time = document.createTextNode(message.getTimeText());
        
        // Alla andra elment skapar vi, men messagewindow variabel existerar o läses in från unikt id.
        // Sätter klassnamn till min messagebox
        messageBox.className = "messageBox";
        // Sätter unika id till min messabox eftersom det behövs för hålla ordning på vilket meddellande.
        messageBox.id = "messageBox" + id;
        
        // Här väljer jag var mina element ska ligga, ex messagebox ska läggas i min chatbox.
        // skriver ut text och tid i chatten.
        pTagText.innerHTML=message.getHTMLtext(); 
        pTagTime.appendChild(time);
        divChatbox.appendChild(messageBox);
        messageBox.appendChild(pTagTime);
        messageBox.appendChild(pTagText);
        messageBox.appendChild(checkTimeButton);
        messageBox.appendChild(deleteButton);
        
        // skapar några id för css
        checkTimeButton.id="timeButton";
        pTagTime.id="time";
        deleteButton.id="deleteButton";
        
        // 2 eventlistener, för kolla tid och ta bort meddelanden, läggs i chatten.
        deleteButton.addEventListener("click", function(f){
            that.DeleteFunction(f, messageBox.id);
            console.log(f);
        },false);
        checkTimeButton.addEventListener("click", function(d){
            that.TimeStamp(d,messageBox.id );
        },false);
        console.log(messagesArray[0]);
        return false;
    };
};

window.onload = function(){
    var messBoard = new Messageboard("kalle");
    messBoard.init();
    var messBoard2 = new Messageboard("olle");
    messBoard2.init();
};