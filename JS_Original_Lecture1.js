
// JavaScript Original Lecture 1 -- INTRODUCTION

//
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');

//
prompt("What is your name?")

// Be careful with the substring's letter positions!
"wonderful day".substring(3,7); // "derf"

//
for(var i=10; i>=0; i--){
    console.log(i);
    if(i==0){
        console.log("Blast Off!");
    }
}

// FizzBuzz
for(var i=1; i<=20; i++){
    if(i%15==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

//
var end=prompt("Please enter a numebr.")
for(var i=1; i<=end; i++){
    if(i%15==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}





