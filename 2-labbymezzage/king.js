var King =  {
    
    initializer : function (){
        
        var object =new Construct();
        var olle = "em slot";
        console.log(olle);
       
    },
    
    Startbutton : function () {
                 
      var NewMessageBoardButton = document.getElementById('newChatwindow');
      console.log(NewMessageBoardButton);
       NewMessageBoardButton.addEventListener("click", function(){
            King.initializer();
        }, false);
        
        
    }
    };









window.onload = function(){
     
        King.Startbutton();
   
};