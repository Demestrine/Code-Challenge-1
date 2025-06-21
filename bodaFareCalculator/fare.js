// Calculates fare for a boda boda ride

function calculateBodaFare(){

// Constants for fare calculation
const baseFare = 50; // KES
const perKmCharge = 15; // KES per km

// Get user input (browser version using prompt)
const distanceInKm = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));

// Validate input
if (isNaN(distanceInKm) || distanceInKm <= 0){
console.log("Tafadhali weka umbali halisi (nambari kubwa kuliko 0).");return;}

// Calculate fare
const distanceCharge = distanceInKm * perKmCharge;
const totalFare = baseFare + distanceCharge;

// Display results
console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
console.log(`Mpaka Uko: KES ${distanceCharge}`);
console.log(`Jumla: KES ${totalFare}\n`);
console.log("Panda Pikipiki!");}

// Call the function
calculateBodaFare();