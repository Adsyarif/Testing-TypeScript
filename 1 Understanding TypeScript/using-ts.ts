const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// function add(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     return +num1 + +num2; // convert to integer
//   }
// }

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
