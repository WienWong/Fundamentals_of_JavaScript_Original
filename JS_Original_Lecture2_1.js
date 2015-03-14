
// JavaScript Original Lecture 2-1 -- FUNCTIONS

// Fix me!
var fullName = "";
var name;
var firstLetter;

var fixName = function(){
    firstLetter = name.substring(0, 1);
    name = firstLetter.toUpperCase() + name.substring(1);
    fullName = fullName + " " + name;
};

name = prompt("Enter your first name (all in lower case):");
fixName(name);

name = prompt("Enter your second name (all in lower case):");
fixName(name);

console.log("And your full name is:" + fullName);

// 
var greeting = "Ahoy";

var greet = function () {
  // Local greeting variable.
  var greeting = "Hello";
  console.log(greeting);
};

greet();
// result: Hello

// 1. Global variables are accessible anywhere in the program.
// 2. Local variables are only accessible within the function they were declared in.

/* Start global variable `greeting` scope */
var greeting = "Ahoy";

var greet = function () {
  /* Start local variable `greeting` scope */
  var greeting = "Hello";
  
  /* Start local variable `myName` scope */
  var myName = prompt("Input your name: ");
  
  console.log(greeting + " " + myName);
  /* End local variables `myName` and `greeting` scope */
};

greet();
// Code below will produce a `ReferenceError` since we are out
// of the `myName` variable scope.
console.log(myName);

// The important part of this exercise is to learn about return. The return keyword  
// is used inside a function to return a value when a function is called.
var square = function (x) {
  return x*x;
};
square(9);

// 
var isOdd = function (n) {
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(999));

var isEven = function (n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(999));

// The lost numbers
var lost = [4, 8, 15, 16, 23, 42];
var count = lost.length;

var isLost = function (n) {
  for (var i=0; i<count; i++) {
    if ( n === lost[i]) {
      return n;
    }
  }
  return lost[i];
};

if ( isLost(12) ) {
  console.log('12 is a lost number');
}

if ( isLost(16) ) {
  console.log('16 is a lost number');
}
// result: 16 is a lost number

// Function calls as values
// When we call a function, the return value from it would be the result from the 
// function call and can be used just like any other value in JavaScript.

// Define quarter here.
var quarter = function(n){
    return n/4;
};

if (quarter(4) === 1) {
  console.log("The statement is true.");
} else {
  console.log("The statement is false.");
}
// result: The statement is true.

// Squares n' cubes
var square = function (x) {
  return x * x;
};

var cube = function (x) {
  return square(x) * x;
};

// Fix isNotMultipleOfThree to be the opposite of isMultipleOfThree.
var isMultipleOfThree = function (x) {
  return x % 3 === 0;
};

var isNotMultipleOfThree = function (x) {
  return !isMultipleOfThree(x);
};

// Define isOdd, and then define isEven in terms of isOdd.
var isOdd = function(x){
    if(x%2!=0){
        return true;
    }else{
        return false;
    }  
};

var isEven = function(x){
    return !isOdd(x);
};

// Check if x is divisible by y.
// Use the modulo (%) because that gives us the remainder when we divide one number by another number.
// If the remainder is 0, that means the numbers are multiples.
var isDivisible = function (x, y) {
    if(x%y===0){
        return true;
    }else{
        return false;
    }
};

// Power
var power = function (base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

power(2, 2);

// Recursive
// In the power function you defined in the previous exercise, write an if statement that checks
// if the parameter exponent is 0. If it is, return 1 (a base case).
// Add an else statement where we return the result base * power(base, exponent - 1)
var power = function(base,exponent){
    if(exponent===0){
        return 1
    } else{
        return base * power(base, exponent - 1)
    }   
};
console.log(power(2, 4) === 16);
console.log(power(2, 3) === 8);
console.log(power(2, 5) === 32);





