/*
The employees of a company will receive a 5 % salary increase and a bonus at the end of the year equivalent to 20 % of the new salary.
*/

const bonusQuantity = 5;
const endOfYearPercentage = 20;

let employeeSalary = 3000; // Enter the employee's salary:
// Calculate the percentage employeeSalary with bonusQuantity
const bonus = employeeSalary * bonusQuantity / 100;
// Calculate the percentage employeeSalary with endOfYearPercentage
const endOfYear = employeeSalary * endOfYearPercentage / 100;
// Calculate the new salary
const newSalary = employeeSalary + bonus + endOfYear;
console.log(`With the bonus it will be: ${bonus + employeeSalary}`)
console.log(`With the end of year it will be: ${endOfYear + employeeSalary}`)
console.log(`Final salary is: ${newSalary}`)
