//Calculates ingredients needed to make Kenyan chai

function calculateChaiIngredients(){

// Prompt user for number of cups
const numberOfCups = parseFloat(prompt("Karibu! How many cups of Chai Bora would you like to make?"));

// Validate input
if (isNaN(numberOfCups) || numberOfCups <= 0){
console.log("Please enter a valid number of cups.");return;}

// Calculate ingredients
const water = 200 * numberOfCups;
const milk = 50 * numberOfCups;
const teaLeaves = 1 * numberOfCups;
const sugar = 2 * numberOfCups;

// Display results
console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
console.log(`Water: ${water} ml`);
console.log(`Milk: ${milk} ml`);
console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
console.log(`Sugar (Sukari): ${sugar} teaspoons`); 
console.log("\nEnjoy your Chai Bora!");}

// Call the function
calculateChaiIngredients();