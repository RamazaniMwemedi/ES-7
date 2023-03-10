let userNames = [
  "Kofi",
  "Ama",
  "Kwame",
  "Akosua",
  "Rieve",
  "Mohamed",
  "Diclot",
  "Chritia",
  "Mohamed",
  "Hudhaifa",
  "Benard",
  "Charles",
  "Khai",
];

let peopleObject = [
  {
    name: "Kofi",
    age: 23,
    address: "Kenya",
  },
  {
    name: "Ama",
    age: 23,
    address: "Kenya",
  },
  {
    name: "Kwame",
    age: 12,
    address: "Uganda",
  },
  {
    name: "Akosua",
    age: 42,
    address: "Tanzania",
  },
  {
    name: "Rieve",
    age: 54,
    address: "Sudan",
  },
  {
    name: "Mohamed",
    age: 34,
    address: "Nigeria",
  },
  {
    name: "Diclot",
    age: 43,
    address: "Ethiopia",
  },
  {
    name: "Chritia",
    age: 23,
    address: "Kenya",
  },
  {
    name: "Mohamed",
    age: 23,
    address: "Kenya",
  },
  {
    name: "Hudhaifa",
    age: 23,
    address: "Kenya",
  },
  {
    name: "Benard",
    age: 23,
    address: "Kenya",
  },
  {
    name: "Charles",
    age: 23,
    address: "Kenya",
  },
  {
    name: "Khai",
    age: 23,
    address: "Kenya",
  },
];

peopleObject
  .filter((person) => person.address.toLowerCase() === "tanzania")
  .map(function (person) {
    console.log(
      `Hello ${person.name} ! I belive you are ${person.age} years old and you are from ${person.address}`
    );
  });

// peopleObject.map(function (person) {
//   console.log(
//     `Hello ${person.name} ! I belive you are ${person.age} years old and you are from ${person.address}`
//   );
// });

// userNames.map((name) => {
//   console.log(`Hello ${name} ! Welcome to the world of NodeJS`);
// });
