enum ACCESS {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

const person: {
  name: string;
  age: number;
  hobies: string[];
  role: [number, string];
  access: number;
} = {
  name: "Adrisa",
  age: 15,
  hobies: ["Sport", "Movie"],
  role: [1, "Engineer"],
  access: ACCESS.ADMIN,
};

if (person.access === ACCESS.ADMIN) {
  console.log("Hi Admin!");
}

console.log(person.access);
let favoriteActivities: string[];
let favoriteFood: any[];

person.name = "Ganteng";

person.role.push("admin");
console.log(person);

// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   };
// } = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "A great carpet - almost brand-new!",
//   },
// };

// console.log(product);
