type Combineable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

function combine(
  input1: Combineable,
  input2: Combineable,
  resultConversion: ConversionDescriptor
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

const combineNumber = combine("1", "2", "as-number");
console.log(combineNumber);
const combineString = combine("Adrisa", "Resti", "as-string");
console.log(combineString);

// type User = { name: string; age: number };
// const u1: User = { name: "Max", age: 30 }; // this works!

// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
// }

// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
