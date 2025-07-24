/* eslint-disable */

// Union types allows you to declare a variable or parameter that can hold
// multiple types of value and are declared using the pipe symbol (|) between
// the types. Union types can be useful when you want something to accept
// multiple types of input.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
//

type Color = 'red' | 'green' | 'blue';

const r: Color = 'red';

function setBgColor(c: Color) {
    switch (c) {
        case 'red':
            break;
        case 'blue':
            break;
        case 'green':
            break;
    }
}

setBgColor('blue');

type OneTwoThree = 1 | 2 | 3;

const one: OneTwoThree = 1;

type StrOrNum = string | number;

function sample(data: StrOrNum) {
    if (typeof data === 'string') {
        console.log(`Message: ${data.toUpperCase()}`);
    } else if (typeof data === 'number') {
        console.log(`Total: ${10 + data}`);
    }
}

sample('hello');
sample(10);

const find(): string | undefined {
    return undefined;
}
