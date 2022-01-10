/*
I need to take 1.6ml of a medicine every day.A box of this medicine comes with a bottle of 20ml.
*/


let quantityTaken = 1.6;
let boxBottleQuantity = 20;

let monthsToTake = 6; //How many months do you need to take this medicine?
console.log(`Ok, you will take: ${quantityTaken * 30} ml each month.`);
console.log(`So... You will have to take: ${(quantityTaken * 30) * monthsToTake} ml of medicine in total.`);
console.log(`That means you will need to buy: ${((quantityTaken * 30) * monthsToTake / boxBottleQuantity)} boxes of medicine.`);
