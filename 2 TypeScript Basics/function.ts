function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  let result = num1 + num2;
  cb(result);
}

addAndHandle(12, 3, (r) => {
  console.log(r);
});

printResult(add(2, 3));

let combineValue: (num1: number, num2: number) => number;

combineValue = add;
// combineValue = printResult;
