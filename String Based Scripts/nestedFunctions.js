//Create a function called calculate_total that takes two parameters:
//"num_items" to represent the number of items, and "price" to represent the price per item.
//The function has to multiply these two parameters and add 100 to the total (for shipping costs).

var items = 5;
var usualPrice = 12;
calculate_total(items, usualPrice);

function output(final_val) {
    console.log(`Your final price is: ${final_val}`);
}

function calculate_total(num_items, price) {
    const tax = 100;
    const opr = (num_items * price) + tax;
    output(opr);
}
