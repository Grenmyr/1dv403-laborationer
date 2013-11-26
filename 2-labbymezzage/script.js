window.onload = function (){
    var mess = new Message("tjohej");
    var Messageboard = {
        
        messagesArray: []
    };
    Messageboard.messagesArray.push("Detta är","en fis", "påge");    
    
    console.log(Messageboard.messagesArray);
    console.log(mess.getText(Messageboard.messagesArray[1]),mess.getDate(Messageboard.messagesArray[1]));
    
    /*var mess = new Message("olle hade en stor dase", new Date());
    alert(mess);
    alert(mess.getText());
    mess.setText("Alla var väldigt imponerade");
    alert(mess);*/
    
    };
    