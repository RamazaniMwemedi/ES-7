let userNames = ["Kofi", "Ama", "Kwame", "Akosua"];

let userObject = {
  name: "Kofi",
  age: 25,
  message: function () {
    console.log(`Hello ${this.name} you are ${this.age} years old`);
  },
};

const student = {
  name: "Kofi",
  math: 90,
  physics: 80,
  total: function () {
    console.log(
      `Hey ${this.name} your total is grades are ${this.math + this.physics}`
    );
  },
};

student.total();

userObject.message();
