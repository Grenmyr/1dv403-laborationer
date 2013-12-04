
var Messageboard = function(divId){
    var divMainWindow = document.createElement("div");
    
    var h1 = document.createElement("h1");
    var divChatbox = document.createElement("div");
    var divmessageCount = document.createElement("div");
    var textArea = document.createElement("textarea");
    var sendButton = document.createElement('button');
    
    var messagesArray  = [];
    var that = this;
    this.init  = function(){
    document.querySelector("main").appendChild(divMainWindow);
    divMainWindow.className="large-6 columns";
    h1.innerHTML= "Labby Message!";
    
    divMainWindow.appendChild(h1);
    divMainWindow.appendChild(divChatbox);
    divMainWindow.appendChild(divmessageCount);
    divMainWindow.appendChild(textArea);
    divMainWindow.appendChild(sendButton);
    

        // Här kollar jag OM enter (13) trycks så kör vi istället send functionen genom den.
            textArea.addEventListener("keypress", function(e){
            var enterKey = e.keyCode;
            if (enterKey === 13 && !e.shiftKey){
               that.Send(e); 
            }
            },false);
        
        // That = this, som ger mig en referens till mitt Messageboard Object. Den anonyma funktionen,är 
        // en referens till den funktionensom ska köra när eventet triggas.
        sendButton.addEventListener("click", function(e){
            that.Send(e);
        }, false);
    };
    
    this.Send = function(e){
        e.preventDefault();
        // Sparar texten i chatfönster till variabel

        // Skickar min strängvariabel och skickar tid till konstruktorn med tid. och tilldelar variabeln objmessage detta.
        var objMessage = new Message(textArea.value,new Date());
        // Tömmer min chat
        textArea.value="";
        
        // trycker in mitt messageobjekt till mitt objectArray sen skickar med message till min Rendermessage object.
        messagesArray.push(objMessage);
        that.RenderMessage(objMessage, (that.GetMessageCount()-1));
        that.UppdateMessageCount();
        console.log(messagesArray.length);

    };
    
    this.UppdateMessageCount = function(){
        // Här Skapar jag en function som anropar GetMessagecoutn och namnger mina div taggar.
         
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
        divChatbox.appendChild(messageBox);
        pTagText.innerHTML=message.getHTMLtext(); 
        pTagTime.appendChild(time);
      
        messageBox.appendChild(pTagText);
        messageBox.appendChild(pTagTime);
        messageBox.appendChild(deleteButton);
        messageBox.appendChild(checkTimeButton);
        
        // Sätter sätter listener på deletebutton och använder that= this för kunna använda den utanför vår function.
        checkTimeButton.innerHTML= "Klockan";
        checkTimeButton.id="timeButton";
        deleteButton.innerHTML= "ta bort";
        
        deleteButton.addEventListener("click", function(f){
            that.DeleteFunction(f, messageBox.id);
        },false);
        checkTimeButton.addEventListener("click", function(d){
            that.TimeStamp(d,messageBox.id );
        },false);
        console.log(messagesArray[0]);
        return false;
    };
};



window.onload = function(){
    
     var messBoard = new Messageboard("fdsafox");
     messBoard.init();
    var messBoard2 = new Messageboard("fdsafffox");
     messBoard2.init();
};