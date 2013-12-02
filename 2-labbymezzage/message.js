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
    // Ersätter radbrytningar mot en br tag.
    return this.getText().replace(/[\n\r]/g, "<br />");
};

Message.prototype.getTimeText = function(){
    var messTime = this.getDate();
    return messTime.getHours()+":"+messTime.getMinutes()+":"+messTime.getSeconds();
};

