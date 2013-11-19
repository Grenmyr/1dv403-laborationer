"use strict";

var makePerson = function(persArr){
    var personArray;
    var personNamesArray;
	var myPersonObject = {};
	var averageAge;
    
    /* Array som skapas och hämtar ut alla  "age" element från vandalen.js 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */
    
    personArray = persArr.map(function(person){
        return  person.age;
    });
     /* Array array som skapas för att kunna hantera alla "name element"*/
     personNamesArray = persArr.map(function(person){
        return  person.name;
    });
    
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce */
    console.log(personArray); 
    myPersonObject.minAge = personArray.reduce(function(previousValue, currentValue, index, personArray){
        return Math.min(previousValue, currentValue);
    });
    
    myPersonObject.maxAge = personArray.reduce(function(previousValue, currentValue, index, personArray){
        return Math.max(previousValue, currentValue);
    });
    
    averageAge  = personArray.reduce(function(age, index){
        
        return (age+index);
    });
    myPersonObject.averageAge = 5;
    
	return myPersonObject;
	// Din kod här..retun person.

}

