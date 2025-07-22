/* eslint-disable */

// A `while` loop executes the body while (as long as) some boolean expression
// is `true`. It is your responsibility to manage when and how the loop exits.
// 
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
//

let i = 1;
while (i <= 5) {
    console.log(`${i}`);
    i+= 1;
}
console.log('--');

let j = 1;
while (j <= 5) {
    console.log(`${j}`);
    break;
}
console.log('--');

let k = 1;
while (k <= 5) {
    if (k === 4) {
        k += 1;
        continue;
    }
    console.log(`${k}`);
    k += 1;
}

while (true) { // infinite loop, need a base case.
    if (i >= 30) {
        console.log(`out of infinite loop at index ${i}`);
        break;
    }
    i += 1;
}