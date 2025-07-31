/* eslint-disable */

import { cosh } from "core-js/core/number";
import { KeyObject } from "crypto";

// `as const` allows you to create readonly values in your code. When you use
// `as const` on an object, array or tuple, TypeScript infers that the values
// are constant and cannot be modified later. This can help prevent unexpected
// bugs in your code and make it easier to reason about. It's particularly
// useful when working with APIs or configurations where values should not be
// changed during runtime.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
//

type Rgb = 'red' | 'green' | 'blue';
const red: Rgb = 'red';

{
    const Color = ['red', 'green', 'blue'] as const;
    type Color = (typeof Color)[number];
    const blue: Color = 'blue';

    for (const c of Color) {
        console.log(c);
    }
}

{
    const Department = {
        Executive: 'top floor',
        Sales: 'middle floor',
        Warehouse: 'bottom floor',
    } as const;
    type Department = (typeof Department)[keyof typeof Department];

    let k: keyof typeof Department;
    for (k in Department) {
        console.log(`key: ${k}, floor: ${Department[k]}`);
    }

    const exec: Department = Department.Executive;
}