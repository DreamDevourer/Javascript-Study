const whatCurrency = "USD"; //What currency are you using? (USD/BRL)
let incomePercentage = 10; //What is the income percentage per year?
const investUntil = 5; //See the projection until: (ex: 5)
let howMuch = 5000; // How much do you want to invest? 


// Calculate the income
const FinalIncome = (howMuch * incomePercentage) / 100;
const totalIncome = FinalIncome + howMuch;
console.log(`Your final income in ${investUntil} years is ${totalIncome * investUntil}  ${whatCurrency}`)

// Print the income each year in investUntil.
for (let i = 1; i <= investUntil; i++) {
    console.log(`Your income in ${i} year is ${FinalIncome * i} ${whatCurrency}`);
}
