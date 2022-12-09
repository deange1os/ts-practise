let ab: number;
ab = 10;

let b: string;
b = "hello";

let c = false;
c = true;
// c = 123;

// function sum(a, b) {
//   return a + b;
// }
// sum(123, 456);

function sum(a: number, b: number): number {
  return a + b;
}

// sum(123, "dean");
let result = sum(123, 234);
console.log(result);
