
// JavaScript Original Lecture 3-3 -- Starting a Startup

//Start by defining the function. It now has three parameters!
var calculateTotalCosts = function (salary,numWorkers,city){
    var fixedCosts = 5000;
    var variableCosts = salary*numWorkers;
    if(city==="NYC"){
        return fixedCosts + variableCosts + 30000;
    }else{
        return fixedCosts + variableCosts;
    }
};

calculateTotalCosts(30000,7,"NYC");

// 
var TotalCosts = function (salary,numWorkers,city){
    var fixedCosts = 5000;
    var variableCosts = salary*numWorkers;

    switch(city){
        case "NYC":
            return fixedCosts + variableCosts + 30000;
            break;
        case "BEJ":
            return fixedCosts + variableCosts + 25000;
            break;
        default:
            return fixedCosts + variableCosts + 10000;
            break;
    }        
}
TotalCosts(40000,3,"BBC");

//
var calculateTotalCosts = function(salary,numWorkers,city){
    var fixedCosts = 5000;
    var variableCosts = salary*numWorkers;
    switch(city){
        case "BEJ":
            rent = 25000;
            break;
        case "NYC":
            rent = 30000;
            break;
        default:
            rent = 10000;
            break;
    }
    return rent + variableCosts + fixedCosts;
};
console.log(calculateTotalCosts(50000,9,"NYC"));
console.log(calculateTotalCosts(50000,9,"BEJ"));
console.log(calculateTotalCosts(50000,9,"MUM"));




