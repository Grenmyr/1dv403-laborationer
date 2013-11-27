function Message(_message, _date){
    var _message = "Dasen";
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
    return this.getText()+" ("+this.getDate()+")";
};

Message.prototype.getHTMLtext = function(){
    return this.getText();
};

Message.prototype.getDateText = function(){
    return this.getDate();
};

