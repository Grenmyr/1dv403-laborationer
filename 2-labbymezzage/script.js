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
        var strText = document.getElementById("textArea").value;
        this.RenderMessage(strText);
    },
    
    RenderMessage : function(strText){
        alert(strText);
    }
};

window.onload = function(){
    Messageboard.init();
};