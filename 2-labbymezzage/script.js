window.onload = function (){
    var Messageboard = {
        messagesArray: []
    };
    
    
    var strText = 'hej hej';
    var mess1 = new Message(strText, new Date());
    
    Messageboard.messagesArray.push(mess1);
    
    /*
    var a = Messageboard.messagesArray;
    for(var i = 0; i < a.length; i++){
        console.log(a[i].getText());    
    }
    */
    
    
    //console.log(Messageboard.messagesArray);
    //console.log(mess.getText(Messageboard.messagesArray[1]),mess.getDate(Messageboard.messagesArray[1]));
    
    /*var mess = new Message("olle hade en stor dase", new Date());
    alert(mess);
    alert(mess.getText());
    mess.setText("Alla var väldigt imponerade");
    alert(mess);*/
    
    };
    