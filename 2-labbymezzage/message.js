function Message(_message, _date){
    
    this.getText = function(){
        return _message;
    };
    
    this.setText = function(text){
        _message = text;
    };
    
    this.getDate = function(){
        return _date;
    };
    
    this.setDate = function(date){
        _date = date;
    };
}
  
// Funktioner för hämta ut och anpassa egenskaper ur vår konstruktor  
Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDateText()+")";
};

Message.prototype.getHTMLtext = function(){
    return this.getText();
};

Message.prototype.getDateText = function(alert =false){
    var messTime = this.getDate();
    if (alert === false){
}
        return messTime.getHours()+":"+messTime.getMinutes()+":"+messTime.getSeconds();
};

