//Estimates transaction fees for mobile money transfers

function estimateTransactionFee(){

// Constants for fee calculation
const FeePercentage = 0.015; // 1.5%
const MinFee = 10;const Maxfee = 70;

//Prompt user for amount
const amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES):"));  

// Validate input
if (isNaN(amountToSend) || amountToSend <= 0){
console.log("Please enter a valid amount in KES.");
return;} 

// Calculate fee
let calculatedFee = amountToSend * FeePercentage;  

// Apply minimum and maximum limits
if (calculatedFee < MinFee){
calculatedFee = MinFee;} else if (calculatedFee > MaxFee){
calculatedFee = MaxFee;}  

// Calculate total amount
const totalAmount = amountToSend + calculatedFee;
    
// Display results
console.log(`Sending KES ${amountToSend}:`);
console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
console.log(`Total amount to be debited: KES ${totalAmount}`);
console.log("\nSend Money Securely!");}


// Call the function
estimateTransactionFee();