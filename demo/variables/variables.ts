/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
//

const courseName = "typescript";
const courseName2 = 'typescript';
const courseName3 = `typescript`;

const amount = 10;
const fraction = 10.5;

const oneThousand = 1e3; // exponents
const allPermissions = 0o777; // octals
const hexByte = 0xff; // hex
const binary = 0b0100001; // binary number

const bigInt = 9000n;

const yes = true;
const no = false;

const missing = undefined; // completely missing
const empty = null; // we know its missing

// empty = undefined; // cannot do this

let someNum = 0;
someNum = 1; // can do this

// let someNum = 5; // cannot redeclare

{
    let someNum = 5; // can redeclare inside a block just for the block. Good for testing.
}

let hello; // unitialized variables.  You will set it later
hello = 'hi';

// const whoops; // must be initialized, cannot do this.




