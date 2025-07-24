// jest
// need to have the same base name as the file we are testing.  ex: strings.ts -> strings.test.ts

import { concat, div, slowString, failedString } from './strings';

it ('should say "Hello, world!"', () => {
    expect(
        concat("Hello,", " world!")
    ).toEqual("Hello, world!");
});

it ('should divide', () => {
    expect(div(10, 2)).toEqual(5);
});

it ('should not divide by zero', () => {
    expect(() => {
        div(10, 0);
    }).toThrow();
});

test('slow string fetch sample text', async () => {
    slowString()
        .then((data) => {
            expect(data).toEqual('sample');
        })
        .catch((err) => expect(err).toBeUndefined());
});

test('failed string fails with a "whoops"', async () => {
    failedString()
        .then((data) => {
            expect(data).toBeUndefined();
        })
        .catch((err) => expect(err).toEqual('whoops'));
});