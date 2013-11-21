"use strict";

var makePerson = function(persArr){
    var personArray;
    var personNamesArray;
	var myPersonObject = {};
	var averageAge;
    
    // HÄREFTER HANTERAS EGENSKAPERNA AV TYP "age"
    
    /* Array skapas/hämtas från testet för att kunna hantera alla  "age" objekt från vandalen.js 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */
    personArray = persArr.map(function(person){
        return  person.age;
    });
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
    // Man kan säga att jag jämför alla åldrar och retunerar det samtidigt till min personobject.
    myPersonObject.minAge = personArray.reduce(function(previousValue, currentValue, index, personArray){
        return Math.min(previousValue, currentValue);
    });
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
     // Här så kör jag reduce för jämföra alla första och anndra age element genom hela arrayen och sen kör jag
     // at den ska retunera maxage.
    myPersonObject.maxAge = personArray.reduce(function(previousValue, currentValue, index, personArray){
        return Math.max(previousValue, currentValue);
    });
    
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
     // här adderar jag alla age objekt.
    averageAge  = personArray.reduce(function(previousAge, age, index, personArray){
        
        return (previousAge+age);
    });
    
    /* Var tvungen att dela upp beräkningen av snittålder i två steg av någon kosntig anledning */
    // Här beräknas snittåldern baserat på antalet age egenskaper.
    myPersonObject.averageAge = Math.round(averageAge/personArray.length);
    
     // HÄREFTER HANTERAS EGENSKAPERNA AV TYP "name"
     
     // Array skapas/hämtas från testet för att kunna hantera alla "name objekt"*/
    personNamesArray = persArr.map(function(person){
        return person.name ;
    });
    
    // Sort är en anonym funktion som sorterar på alla möjliga tecken inklusive åäö. Så här sorterar vi namnen
    // Baserat på alfabetet.
    personNamesArray.sort(function(a, b){
        return a.localeCompare(b);
    });
    
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
     // Här använder jag reduce funktionen, för att plocka ut förnamn och efternamn för all objekt som nu e sortrat sen innan.
    myPersonObject.names = personNamesArray.reduce(function(previousName, name, index, personNamesArray){
        return previousName + ", " + name;
    });
    
    // sen här retuneras mitt personobject med alla nya egenskaper som lagts till.
	return myPersonObject;
	

};

