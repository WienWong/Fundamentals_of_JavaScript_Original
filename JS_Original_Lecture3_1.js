
// JavaScript Original Lecture 3-1 -- Conditionals

// Why do we use console.log?

// If we just returned an outcome from our code, the console would only print out the very last outcome.
// Using console.log allows us to print out more than one line.

//
var yourName = "oo";
var gender = "male";
var result;

if (yourName.length > 0 && gender.length > 0 ) {
    if (gender === "male" || gender === "female") {
        result = "Thanks";
    } else {
        result = "Please enter male or female for gender.";
    }
} else {
    result = "Please tell us both your name and gender.";
}

//
// Define the function under this line
var canIDrive = function(myAge, legalDrivingAge){
    if(myAge>=legalDrivingAge){
        return true;
    }else{
        return false;
    }
};

// Declare legalDrivingAge under myAge
var myAge = prompt("How old are you?");
var legalDrivingAge = 18;
//Create an if else statement using the function as a condition
if (canIDrive(myAge,legalDrivingAge)===true) {
    console.log("You can legally drive!");
}
else {
    console.log("You'll have to wait a few more years!");
}

//
var born = prompt("What country were you born in?")
var result;

switch (born) {
    case "USA":
        result =  "Born in the USA";
        break;
    default :
        result = "Born outside the USA";
        break;
}

//
var x = 10;
var y = 12;

if (x > y) {
    result = "good job";
}
else {
    result = 20;
}

//Below is the above code written using the ternary operator
result = x > y ? "good job" : 20;

// 
var myAge = prompt("Your age?")

// a simple if else statement
if (myAge >= 18) {
    answer = "adult";
}
else {
    answer = "non-adult" ;
}

// rewrite the code above using a ternary operator
answer = myAge >= 18 ? "adult" : "non-adult";

//

