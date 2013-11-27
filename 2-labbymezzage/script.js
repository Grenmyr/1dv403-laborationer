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
        var strText = document.getElementById("textArea").value;
        var message = new Message(strText,Date());
        this.messagesArray.push(message);
        console.log(message.getText());
        console.log( Messageboard.messagesArray.toString());
        this.RenderMessage(message);
        
    },
    
    RenderMessage : function(Dase){
        var div = document.getElementById("chatBox");
        var box = document.createElement("div");
        var text = document.createTextNode(Dase);
        box.appendChild(text);
        div.appendChild(box);
        
        
        
        return false;
    }
};

window.onload = function(){
    Messageboard.init();
    //Messageboard.messageBox();
};