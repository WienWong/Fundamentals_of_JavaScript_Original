
// JavaScript Original Lecture 3-2 -- Dice Game

// A Roll of the Dice
// pick a random number between 1 and 6 for our roll of the die
var die = Math.floor(Math.random()*6 + 1);

console.log("You rolled a "+die);

// 1 and Done
// pick a random number between 1 and 6 for our roll of the die
var die = Math.floor(Math.random()*6 + 1);
var score;

// this time make an if statement so that if the roll is 1 the score is 0
if(die===1){
    score=0;
}else{
    score=die;
}

console.log("You rolled a "+die+" for a score of "+score);

// Two Dice
// pick a random number between 1 and 6 for our roll of the die
var die1 = Math.floor(Math.random()*6 + 1);
var die2 = Math.floor(Math.random()*6 + 1);
var score;

// this time if either dice roll is 1 then score should be 0
// Otherwise, score should be the sum of the two dice
if(die1===1 || die2===1){
    score = 0;
}else{
    score = die1 + die2;
}

console.log("You rolled a "+die1+" and a "+die2+" for a score of "+score);

// Doubling Doubles
// pick a random number between 1 and 6 for our roll of the die
var die1 = Math.floor(Math.random()*6 + 1);
var die2 = Math.floor(Math.random()*6 + 1);
var score;

// This time if either die roll is 1 then score should be 0 
if(die1===1 || die2===1){
    score=0;
}else if(die1===die2){
    score=(die1+die2)*2;
}else{
    score=die1+die2;
}


console.log("You rolled a "+die1+" and a "+die2+" for a score of "+score);



