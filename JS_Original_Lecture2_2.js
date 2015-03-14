
// JavaScript Original Lecture 2-2 -- Hello, New York

// calculates taxi fare based upon miles traveled 
// and the hour of the day in military time (0-23).
var taxiFare = function (milesTraveled, pickupTime) {
	var baseFare = 2.50;
	var costPerMile = 2.00;
	var nightSurcharge = 0.50; // 8pm to 6am, every night
	var cost = baseFare + (costPerMile * milesTraveled); 
	// add the nightSurcharge to the cost if it is after 
	// 8pm or before 6am
	if (pickupTime >= 20 || pickupTime < 6) {
		cost += nightSurcharge;
	} 
	return cost;
};

// use taxiFare to set tripCost to the cost of your 
// ride covering 5 miles at 2 am in the morning
var tripCost = taxiFare(5,2);

// Your taxi trip will cost $13!


// Split our original taxiFare function into two functions. The new surCharge function will take
// care of the night shift surcharge only. (think of it as a helper function)
function taxiFare(milesTraveled, hourOfDay) {
	var baseFare = 2.50;
	var costPerMile = 2.00;
	var cost = baseFare + (costPerMile * milesTraveled)

	cost = cost + surCharge(hourOfDay);
		
	return cost;
};

function surCharge(pickupTime) {
	var nightSurcharge = 0.00;

	if (pickupTime >= 20 || pickupTime < 6){
		nightSurcharge = 0.75;
	}
		  
	return nightSurcharge;
}
// Notice how organized we are getting? Anything related to surcharge is handled by the 
// surCharge function.The taxiFare function can ignore all the details.

// Another possibility is to have functions exist inside of each other. This is know as nesting.

//Step 2: Call taxiFare here with 50 miles traveled at 3am
var tripCost = taxiFare(50,3);

function taxiFare(milesTraveled, hourOfDay) {
	var baseFare = 2.50;
	var costPerMile = 2.00;
	var cost = baseFare + (costPerMile * milesTraveled)

	cost = cost + surCharge(hourOfDay);
	  
	// Step 1: Paste surCharge here
	function surCharge(pickupTime) {
	var nightSurcharge = 0.00;

	if (pickupTime >= 20 || pickupTime < 6){
		nightSurcharge = 0.75;
	}
		  
	return nightSurcharge;
	}
	return cost;
};
