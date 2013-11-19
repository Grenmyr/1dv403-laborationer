"use strict";

var makePerson = function(persArr){
	var maxAge;
    var minAge;
    var personAges;
    var averageAge;
	var myPersonObject = {};
	
	
	
	
    var personArray = persArr.map(function(person){
        return  person.age;
    });
    
    console.log(personArray); 
    myPersonObject.minAge = personArray.reduce(function(previousValue, currentValue, index, personArray){
        return Math.min(previousValue, currentValue);
    });
    
    //myObj.maxAge = maxage;
	return myPersonObject;
	// Din kod här..retun person.

}

