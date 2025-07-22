/* eslint-disable */
import { strict as assert } from "assert";

// Arrays offer a way to store and manipulate collections of values of the same
// type. They are defined using square brackets and can be populated with
// values at initialization, or later using various methods such as push(),
// splice(), and concat(). Arrays can be of a fixed length or dynamically
// resized as needed, and they can be used with various array methods to
// perform common operations like sorting, filtering, and mapping.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//

const numbers: number[] = [1, 2, 3];
let letters: string[] = ['a', 'b', 'c'];

const b = letters[1];
assert.equal(b, 'b');

letters[1] = 'z';
assert(letters[1] === 'z');
assert.deepEqual(letters, ['a', 'z', 'c']);

// try to avoid mixed arrays:
const mixed = [1, 'hello'];

const names = [
    ['Chris', 'L'],
    ['Alice', 'B'],
];

const chris = names[0][0];
const L = names[0][1];
const B = names[1][1];

const nums: number[] = [];
nums.push(10);
nums.push(20);
nums.push(30);
nums.pop();
assert.deepEqual(nums, [10, 20]);

nums.splice(0, 1);
assert.deepEqual(nums, [20]);