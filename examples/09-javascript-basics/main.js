// Alert
// alert("Hello class");

// Console log
// https://javascript.info/debugging-chrome#logging
console.log("Hello 👍");
console.log(2);

// Variables
// https://javascript.info/variables

// String
let myName = "Jonas";
var bird = "mocking bird";
let tree = "birch";

// Number
const amountOfTrees = 10;

// Boolean
let isItRaining = false;

console.log("myName: ", myName);

console.log("name");
console.log(myName);

console.log("isItRaining: ", isItRaining);

console.log("myName: ", myName);

// Comparisons
// https://javascript.info/comparison

const minimum = 10;
const maximum = 100;
const isItTrue = minimum == maximum;
console.log("isItTrue: ", isItTrue);

const isItSunny = false;
const comparison = isItSunny === 0;

console.log("comparison: ", comparison);

// Conditional branching: if
// https://javascript.info/ifelse

if (isItSunny) {
  console.log("☀️");
} else {
  console.log("🌧");
}

if (isItSunny == false) {
  console.log("no it is not sunny");
}

if (!isItSunny) {
  console.log("no it is not sunny");
}

if (minimum < maximum) {
  console.log("minimum is indeed smaller", minimum, maximum);
}

// Logical operators: || and && and !(NOT)
// https://javascript.info/logical-operators

const sunny = true;
const rainy = false;
const cloudy = true;

if (sunny || rainy || cloudy) {
  console.log("🌧☀️");
}

if (sunny && cloudy) {
  console.log("it is either sunny or cloudy");
}

if (sunny && !rainy) {
  console.log("it sunny but not raining");
}

// Loops: while and for
// https://javascript.info/while-for

let i = 0;

while (i <= 4) {
  console.log("my i is: ", i);
  // i++;
  i = i + 1;
}

for (let index = 9; index > 5; index--) {
  console.log("index: ", index);
}

// Objects
// https://javascript.info/object

const coordinates = {
  x: 10,
  y: 20,
};

const family = {
  father: "Homer",
  son: "Bart",
  house: {
    room: "kitchen",
  },
};

console.log(family.father);
console.log(family.house.room);
const myKey = "father";

console.log("value by key: ", family[myKey]);

console.log(family.father, family.son);

// Arrays
// https://javascript.info/array

const allNames = ["luis", "lyvia", "jonas"];

console.log("allNames[0]: ", allNames[0]);
console.log("allNames[1]: ", allNames[1]);

const myObjects = [
  { x: 10, y: 13 },
  { x: 39, y: 78 },
];

console.log(myObjects[0].y);

const nestedArray = [
  ["homer", "bart", "marge"],
  ["luis", "lyvia"],
];

console.log(nestedArray[1][1]);

console.log("nestedArray.length: ", nestedArray.length);

for (let index = 0; index < allNames.length; index++) {
  console.log(allNames[index]);
}

// Defining functions
function multiplyByTwo(number) {
  console.log("number: ", number);
  return number * 2;
}

const value = multiplyByTwo(3);
console.log("value: ", value);

const secondValue = multiplyByTwo(value);
console.log("secondValue: ", secondValue);

// Accessing the DOM
// https://javascript.info/searching-elements-dom

const selectedDiv = document.getElementById("myDiv");
console.log("selectedDiv: ", selectedDiv);
console.log("myAmount: ", selectedDiv.innerHTML);

const myAmount = selectedDiv.innerHTML;

console.log(myAmount + 2);

const myListElements = document.querySelectorAll(".list-item");
console.log("myListElements: ", myListElements);
console.log("myListElements[0].innerHTML: ", myListElements[0].innerHTML);

const item = document.querySelector('[data-javascript="item"]');
