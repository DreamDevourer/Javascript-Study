// Fibonacci Sequence
/*
In Mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation:
Fn = Fn - 1 + Fn - 2
Sample with Seed:
F0 = 0 and F1 = 1
Sequence sample:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377...
*/

let fibonacciSequenceV = [0, 1];

let fibUsrGift = 12;

console.log(fibonacciSequence(fibUsrGift));

function fibonacciSequence(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
    }
}
