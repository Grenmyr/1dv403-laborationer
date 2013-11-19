"use strict";

var makePerson = function(persArr){
    var personArray;
    var personNamesArray;
	var myPersonObject = {};
	var averageAge;
    
    // HÄREFTER HANTERAS EGENSKAPERNA AV TYP "age"
    
    /* Array skapas/hämtas från testet för att kunna hantera alla  "age" element från vandalen.js 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */
    personArray = persArr.map(function(person){
        return  person.age;
    });
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
    
    myPersonObject.minAge = personArray.reduce(function(previousValue, currentValue, index, personArray){
        return Math.min(previousValue, currentValue);
    });
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
    myPersonObject.maxAge = personArray.reduce(function(previousValue, currentValue, index, personArray){
        return Math.max(previousValue, currentValue);
    });
    
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
    averageAge  = personArray.reduce(function(previousAge, age, index, personArray){
        
        return (previousAge+age);
    });
    
    /* Var tvungen att dela upp beräkningen av snittålder i två steg av någon kosntig anledning */
    myPersonObject.averageAge = Math.round(averageAge/personArray.length);
    
     // HÄREFTER HANTERAS EGENSKAPERNA AV TYP "name"
     
     // Array skapas/hämtas från testet för att kunna hantera alla "name element"*/
    personNamesArray = persArr.map(function(person){
        return person.name ;
    });
    
    // Sort är en anonym funktion som sorterar på alla möjliga tecken inklusive åäö.
    personNamesArray.sort(function(a, b){
        return a.localeCompare(b);
    });
    
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
    myPersonObject.names = personNamesArray.reduce(function(previousName, name, index, personNamesArray){
        return previousName + ", " + name;
    });
    
    
	return myPersonObject;
	// Din kod här..retun person.

};

