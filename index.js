// Arithmetic Operations

// An array of all operations to perform
var operations = [
  {
    name: "Addition",
    symbol: "+",
    description: "Addition of numbers",
    equation: "2 + 2 = 4",
    answer: 4,
  },
  {
    name: "Subtraction",
    symbol: "-",
    description: "Subtraction of numbers",
    equation: "2 - 2 = 0",
    answer: 0,
  },
  {
    name: "Multiplication",
    symbol: "*",
    description: "Multiplication of numbers",
    equation: "2 * 2 = 4",
    answer: 4,
  },
  {
    name: "Division",
    symbol: "/",
    description: "Division of numbers",
    equation: "4 / 2 = 2",
    answer: 2,
  },
  {
    name: "Modulus",
    symbol: "%",
    description: "Modulus of numbers",
    equation: "4 % 2 = 0",
    answer: 0,
  },
  {
    name: "Exponent",
    symbol: "^",
    description: "Exponent of numbers",
    equation: "2 ^ 2 = 4",
    answer: 4,
  },
];

console.table(operations);

// An array of conditions to check for each operation
var conditions = [
  {
    name: "Equal to",
    symbol: "==",
    description: "Check if two numbers are equal",
    equation: "2 == 2",
    answer: true,
  },
  {
    name: "Not Equal to",
    symbol: "!=",
    description: "Check if two numbers are not equal",
    equation: "2 != 2",
    answer: false,
  },
  {
    name: "Greater than",
    symbol: ">",
    description: "Check if one number is greater than another",
    equation: "2 > 2",
    answer: false,
  },
  {
    name: "Less than",
    symbol: "<",
    description: "Check if one number is less than another",
    equation: "2 < 2",

    answer: false,
  },
  {
    name: "Greater than or equal to",
    symbol: ">=",
    description: "Check if one number is greater than or equal to another",
    equation: "2 >= 2",
    answer: true,
  },
  {
    name: "Less than or equal to",
    symbol: "<=",
    description: "Check if one number is less than or equal to another",
    equation: "2 <= 2",
    answer: true,
  },
];

console.table(conditions);

// Adding
// The addition operator (+) adds numbers
var x = 5;
var y = 2;
var z = x + y;
console.log(z); // 7

// Subtracting
// The subtraction operator (-) subtracts numbers.
var x = 5;
var y = 2;
var z = x - y;
console.log(z); // 3

// Multiplying
// The multiplication operator (*) multiplies numbers.

var x = 5;
var y = 2;
var z = x * y;
console.log(z); // 10

// Dividing
// The division operator (/) divides numbers.
var x = 5;
var y = 2;
var z = x / y;
console.log(z); // 2.5

// Modulus
// The modulus operator (%) returns the remainder of a division.
var x = 5;
var y = 2;
var z = x % y;
console.log(z); // 1

// Exponentiation
// The exponentiation operator (**) raises a number to the power of another number.
var x = 5;
var y = 2;
var z = x ** y;
console.log(z); // 25

// Incrementing
// The increment operator (++) increments a number by 1.
var x = 5;
x++;
console.log(x); // 6

// Decrementing
// The decrement operator (--) decrements a number by 1.
var x = 5;
x--;
console.log(x); // 4

// Assignment
// The assignment operator (=) assigns a value to a variable.
var x = 5;
x = 10;
console.log(x); // 10

// Addition Assignment
// The addition assignment operator (+=) adds a value to a variable.
var x = 5;
x += 10;
console.log(x); // 15

// Subtraction Assignment
// The subtraction assignment operator (-=) subtracts a value from a variable.
var x = 5;
x -= 10;
console.log(x); // -5
 
// Multiplication Assignment
// The multiplication assignment operator (*=) multiplies a value to a variable.
var x = 5;
x *= 10;
console.log(x); // 50

// Division Assignment
// The division assignment operator (/=) divides a value from a variable.
var x = 5;
x /= 10;
console.log(x); // 0.5

// Modulus Assignment
// The modulus assignment operator (%) assigns a value to a variable.
var x = 5;
x %= 10;
console.log(x); // 5

// Exponentiation Assignment
// The exponentiation assignment operator (**=) raises a value to the power of another value.
var x = 5;
x **= 10;
console.log(x); // 3125

// Increment Assignment
// The increment assignment operator (+=) increments a value by 1.
var x = 5;
x++;
console.log(x); // 6

// Decrement Assignment
// The decrement assignment operator (-=) decrements a value by 1.
var x = 5;
x--;
console.log(x); // 4

// Comparison
// The comparison operator (==) compares two values.
var x = 5;
var y = 10;
var z = x == y;
console.log(z); // false

// Strict Equality
// The strict equality operator (===) compares two values and returns true if they are the same value and type.
var x = 5;
var y = "5";
var z = x === y;
console.log(z); // false

// Strict Inequality
// The strict inequality operator (!==) compares two values and returns true if they are not the same value and type.
var x = 5;
var y = "5";
var z = x !== y;
console.log(z); // true

// Inequality
// The inequality operator (!=) compares two values and returns true if they are not the same value.
var x = 5;
var y = "5";
var z = x != y;
console.log(z); // true


// Less Than
// The less than operator (<) returns true if the left operand is less than the right operand.
var x = 5;
var y = 10;
var z = x < y;
console.log(z); // true


// Less Than or Equal To
// The less than or equal to operator (<=) returns true if the left operand is less than or equal to the right operand.
var x = 5;
var y = 10;
var z = x <= y;
console.log(z); // true


// Greater Than
// The greater than operator (>) returns true if the left operand is greater than the right operand.
var x = 5;
var y = 10;
var z = x > y;
console.log(z);  // false


// Greater Than or Equal To
// The greater than or equal to operator (>=) returns true if the left operand is greater than or equal to the right operand.
var x = 5;
var y = 10;
var z = x >= y;
console.log(z); // false


// Logical AND
// The logical AND operator (&&) returns true if both operands are true.
var x = 5;
var y = 10;
var z = x > y && x < y;
console.log(z); // false


// Logical OR
// The logical OR operator (||) returns true if either operand is true.
var x = 5;
var y = 10;
var z = x > y || x < y;
console.log(z); // true


// Logical NOT
// The logical NOT operator (!) returns true if the operand is false.
var x = 5;
var y = 10;
var z = !(x > y);
console.log(z); // false


// Conditional
// The conditional operator (?) returns one value if the condition is true and another value if the condition is false.
var x = 5;
var y = 10;
var z = x > y ? "x is greater than y" : "x is less than y";
console.log(z); // x is less than y

// Conditional Assignment
// The conditional assignment operator (??=) assigns a value to a variable if the variable is undefined.
var x;
x = x ?? 10;
console.log(x); // 10
