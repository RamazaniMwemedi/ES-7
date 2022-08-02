// JavaScript Data Types

// An Array of data types in JavaScript
const dataTypes=[{
    name: 'String',
    description: 'A string is a sequence of characters, i.e. a sequence of characters.',
    example: '"Hello World"'
},{
    name: 'Number',
    description: 'A number is a numerical value.',
    example: '5'
},{
    name: 'Boolean',
    description: 'A boolean is a true or false value.',
    example: 'true'
},{
    name: 'Null',
    description: 'A null value is an empty value.',
    example: 'null'
},{
    name: 'Undefined',
    description: 'An undefined value is a value that has not been assigned a value.',
    example: 'undefined'
},{
    name: 'Object',
    description: 'An object is a collection of data types.',
    example: '{}'
}];

console.table(dataTypes);
// JavaScript has six data types:
// 1 - Undefined
// 2 - Null
// 3 - Boolean
// 4 - String
// 5 - Number
// 6 - Object


//1 Undefined
// The undefined data type is used when a variable has not been assigned a value.
var x;
console.log(x); // undefined


//2 Null
// The null data type is used when a variable has been assigned a value, but the value is set to null.
var x = null;
console.log(x); // null


//3 Boolean
// The boolean data type is used to store true or false values.
var x = true;
console.log(x); // true
var x = false;
console.log(x); // false


//4 String
// The string data type is used to store text.
var x = "Hello World";
console.log(x); // Hello World


//5 Number
// The number data type is used to store numbers.
var x = 10;
console.log(x); // 10


//6 Object
// The object data type is used to store objects.
var x = {
    name: "John",
    age: 30
};
console.log(x); // {name: "John", age: 30}