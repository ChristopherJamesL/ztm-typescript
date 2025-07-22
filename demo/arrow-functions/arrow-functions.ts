/* eslint-disable */

// Arrow functions provide a concise syntax for defining functions. They are
// defined using a fat arrow (=>) and can be used in place of traditional
// function expressions. Arrow functions automatically bind the 'this' keyword
// to the parent context, making them useful in event handlers and callback
// functions. They also support implicit return statements for one-liner
// functions, which makes the code more readable.
// 
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//

const sum = function (lhs: number, rhs: number): number {
    return lhs + rhs;
}

const arrowSum = (lhs: number, rhs: number): number => {
    return lhs + rhs;
}

const sub = (lhs: number, rhs: number): number => {
    return lhs - rhs;
}

const two = sum(1, 1);
const ten = arrowSum(5, 5);

type CalculationFn = (lhs: number, rhs: number) => number;

function calculate(fn: CalculationFn, lhs: number, rhs: number): number {
    const result = fn(lhs, rhs);
    if (result === 7) {
        console.log('you win extra!');
    }
    return result;
}

calculate(arrowSum, 5, 6);
calculate(sub, 13, 6);