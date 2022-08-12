// Array of 10 students
var students = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 31,
  },
  {
    name: "Joe",
    age: 32,
  },
  {
    name: "Jack",
    age: 33,
  },
  {
    name: "Jill",
    age: 34,
  },
  {
    name: "Jana",
    age: 35,
  },
  {
    name: "Juan",
    age: 36,
  },
  {
    name: "Zoe",
    age: 36,
  },
  {
    name: "Mark",
    age: 23,
  },
  {
    name: "Clark",

    age: 20,
  },
  {
    name: "Jenny",
    age: 21,
  },
];

// Filter students who are older than 30 and below 35
let filteredStudents = students.filter(function (student) {
  return student.age >= 30 && student.age <= 35;
});

console.log(filteredStudents);

