<!-- Array in JS -->

# Array in JS

<!-- Whar is an array in JS -->

## What is an array in JS

An array is a data structure that stores a collection of elements.

<!-- How to create an array? -->

## How to create an array?

There are two ways to create an array in JS.

1. Using the array literal
2. Using the array constructor

<!-- Using the array literal -->

### Using the array literal

```js
// Example
let userNames = ["Kofi", "Ama", "Kwame", "Akosua"];
```

<!-- Using the array constructor -->

### Using the array constructor

```js
// Example
let userNames = new Array("Kofi", "Ama", "Kwame", "Akosua");
```

<!-- How to access an array element? -->

## How to access an array element?

```js
// Example
let userNames = ["Kofi", "Ama", "Kwame", "Akosua"];
console.log(userNames[0]); // Kofi
console.log(userNames[1]); // Ama
console.log(userNames[2]); // Kwame
console.log(userNames[3]); // Akosua
```

<!-- How to add an element to an array? -->

## How to add an element to an array?

```js
// Example
let userNames = ["Kofi", "Ama", "Kwame", "Akosua"];
userNames.push("Kwabena");
console.log(userNames); // ["Kofi", "Ama", "Kwame", "Akosua", "Kwabena"]
```

<!-- How to remove an element from an array? -->

## How to remove an element from an array?

```js
// Example
let userNames = ["Kofi", "Ama", "Kwame", "Akosua"];
userNames.pop();
console.log(userNames); // ["Kofi", "Ama", "Kwame"]
```

<!-- How to get the length of an array? -->

## How to get the length of an array?

```js
// Example
let userNames = ["Kofi", "Ama", "Kwame", "Akosua"];
console.log(userNames.length); // 4
```

<!-- How to loop through an array? -->

## How to loop through an array?

```js
// Example
let userNames = ["Kofi", "Ama", "Kwame", "Akosua"];
for (let i = 0; i < userNames.length; i++) {
  console.log(userNames[i]);
}
```
