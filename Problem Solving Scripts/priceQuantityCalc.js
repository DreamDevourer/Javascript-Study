/*
Idea:
A fair sells hot dog and refrigerant.
Each hot dog is sold by 8 USD.
Each refrigerant is sold by 5 USD.
*/

const howManyHD = 3; //How many hot dogs do you want to buy?
const howManyRef = 2; //How many refrigerants do you want to buy?

// Values in USD
let hotDogPrice = 8.0;
let refPrice = 5.0;

// Convert hotDogPrice to int.
hotDogPrice = parseInt(hotDogPrice);
// Convert refPrice to int.
refPrice = parseInt(refPrice);

console.log(`You have to pay: $${(howManyHD * hotDogPrice) + (howManyRef * refPrice)}`);
console.log("Thank you.");
