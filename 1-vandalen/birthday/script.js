"use strict";

window.onload = function(){

	var birthday = function(date){
    var birthDate;
    var currentDate;
    var counter;
    var regEx =/\d{4}\-\d{2}\-\d{2}/;
    
    //Regex som jämför indata att den har 4,2,2 decimaltyp med - imellan.
        if (!regEx.test(date)) {
            throw {message:"Här gavs fel datum"};
        }
        // tar bort bindestreck
        date = date.split("-");
        currentDate = new Date();
        // Tilldelar mitt födelsedatum current dates år, och dumpar in element 2([1]-1) eftersom det är månad.
        birthDate = new Date(currentDate.getFullYear(),(date[1]-1),date[2]);
        // Jämför dels tiden i milisecunder mellan objecten och om det skilt ifrån samma år(getdate)så lägger
        // jag till 1 år till currentdate så den räknar ner om månaden för currentdate passerats. 
        if (currentDate.getTime() > birthDate.getTime() && currentDate.getDate() !== birthDate.getDate() ) {
            birthDate.setFullYear(currentDate.getFullYear()+1);
        }
        // Jämför föredelsedag med dagens datum i milisekunder (getTime)
        console.log(birthDate.getTime()-currentDate.getTime());
        // Räknar om milisekunderna till dagar.
		counter = Math.ceil( ( birthDate.getTime() - currentDate.getTime() ) / (1000*60*60*24));
		
			return counter;
	};
	
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};