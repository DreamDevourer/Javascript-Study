var prices = [10, 15, 25, 8, 4, 55, 99, 11, 15, 25, 5, 4, 65, 5, 10, 15, 7, 8, 4, 9, 100];

//using a while loop, traverse the array and multiply each price by 2.

var i = 0;
while (i < prices.length) {
    prices[i] = prices[i] * 2;
    i++;
    console.log(prices);
}
