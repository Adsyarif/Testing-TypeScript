// type addFn = (a: number, b: number) => number;

interface addFn {
  (a: number, b: number): number;
}

let add: addFn;

add = (n1: number, n2: number) => n1 + n2;

interface named {
  readonly name: string;
}

interface Greetable extends named {
  greet(text: string): void;
}

class Person implements Greetable {
  name: string;
  age = 16;

  constructor(n: string) {
    this.name = n;
  }

  greet(text: string) {
    console.log(`${text} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person("Adrisa");

user1.greet("Good moring - I am");
