type Admin = {
  name: string;
  privilage: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type EvelavatedEmployee = Admin & Employee;

const e1: EvelavatedEmployee = {
  name: "Adrisa",
  privilage: ["Make server"],
  startDate: new Date(),
};

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);
  if ("privilage" in emp) {
    console.log("Privilage: " + emp.privilage);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Adrisa", startDate: new Date() });

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: number, n2: string): string;
function add(n1: string, n2: string): string;
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add("adrisa", "ganteng");
result.split("");

const fetchUserData = {
  id: "u1",
  name: "Adrisa",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchUserData?.job?.title);

const userInput = undefined;

const storageData = userInput ?? "DEFAULT";

class Car {
  drive() {
    console.log("Driving ....");
  }
}

class Truck {
  drive() {
    console.log("Truck is driving ....");
  }

  loadCargo(ammount: number) {
    console.log("truck Loading ...." + ammount);
  }
}

type Vehicle = Truck | Car;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log({ type: "bird", flyingSpeed: 300 });
}

const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi dude";

interface ErrorContainer {
  // {email: 'Not a valid email', username: 'Must start with a character'}
  [prop: string]: string;
}

let errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a character",
};
