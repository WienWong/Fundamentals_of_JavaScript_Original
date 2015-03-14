
// JavaScript Original Lecture 2-3 -- Review of Functions

var cube = function (x) {
    if (typeof(x) !== 'number') return 0;
    return x * x * x;
};

// Once you uncomment the type check in line 2, the cube() function should return 0.
cube("test");

// Local variables
var volume = function (w, l, h) {
    var area = w * l;
    console.log("Inside the function, area is " + area);
    return area * h;
};

var area = 36;
console.log("The volume is " + volume(2, 3, 4));
console.log("Outside the function, area is " + area);

// Getting it wrong (Side-effects)
// Now you see a slightly different version of the volume function. 
// area is no longer preceded by var. Go ahead and run the code. What do you notice?
var area = 36;

var volume = function (w, l, h) {
    area = w * l;
    return area * h;
};

console.log(volume(2, 3, 4));
console.log(area);
//Oops, try again. It looks like area is set to 6 instead of 36. Did you remember to add var in front of area on line 4?
// fixed version
var area = 36;

var volume = function (w, l, h) {
    var area = w * l;
    return area * h;
};

console.log(volume(2, 3, 4));
console.log(area);
// The area variable is no longer local to the function. instead, when the function has been called,
// the area is set to 2 * 3 = 6 when volume is called.

// The area variable outside the function is called a global variable because it is visible everywhere.
// Modifying it inside a function is referred to as a side-effect and is generally something 
// you want to avoid. This is why you should always use var when declaring variables!


// What we pass to a function is called the argument. What we declare in the function signature is called a parameter. 
// Fill in missing parameter!
function getMaxnum(n1,n2){
  if (n1 < n2) {
      return n2;
  }
  else {
    return n1;
  }
}
// Function call with two arguments
alert(getMaxnum(10,11));

// The question has bug! Only paste the 'allowed' result 
function doubleMax(x, y) {
  // add the correct function call after the '*' operator
  return 2 * getMaxnum(x, y);
};

// call me for help!
function getMaxnum(n1, n2) {
    if (n1 < n2) {
      return n2;
    }
    else {
      return n1; 
    }
};
console.log(doubleMax(20.5)); 

// 
function toDo(day){
  if (day === 'saturday' || day === 'sunday'){ 
     return weekendChore();
  }
  else{
     return weekdayChore(); 
  }
}

function weekendChore(){
  alert("Weekend: walk 9am, feed at 4pm, walk at 10pm");
  return 1;
}

function weekdayChore(){
  alert("Weekday: feed at 12pm, walk at 1pm");
  return 0;
}


var wed = toDo('wednesday');
wed;

// The left exercise sections have too many bugs.










