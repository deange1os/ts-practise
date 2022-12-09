let a: boolean;

a = true;

let d: string;
d = "male";
d = "female";

let e: boolean | string;
e = true;
e = "hello";

let f: any;
f = 10;
f = "hello";
f = true;
d = f;

let g: unknown;
g = 10;
g = "hello";
// d = g;
if (typeof g === "string") {
  d = g;
}
d = g as string;
d = <string>g;

// function fn(num) {
//   if (num > 0) {
//     return true;
//   } else return 123;
// }

// void: no return value or undefined
function fn(): void {}

//never: never return any value
function fn2(): never {
  throw new Error("got error");
}

let aa: object;
aa = {};
aa = function () {};

let abc: { name: string; [propName: string]: string };
abc = { name: "dean", a: "11", b: "cc" };

let dd: (a: number, b: number) => number;
// dd = function (n1, n2): number {
//   return n1 + n2;
// };

// string array
let e1: string[];
e1 = ["a", "b", "c"];

let g1: Array<number>;
g1 = [1, 2, 3];

// the length of array cant change
let h: [string, string];
h = ["dean", "cloris"];

enum Gender {
  Male = 0,
  Female = 1,
}
let i: { name: string; gender: Gender };
i = {
  name: "dean",
  gender: Gender.Male,
};

let j: { name: string } & { age: number };
j = { name: "dean", age: 18 };

type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let m: myType;
