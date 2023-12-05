// create a constant variable (const)
const gravity = true;

// create a variable that can be reassigned (let)
let song = "Te Mata";

// create three variables and assign them values of different data types (=)
let dataString = "Apple";
let dataNumber = 12;
let dataBoolean = true;

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof dataNumber);
console.log(typeof dataBoolean);

// change the value referenced by a variable (dynamic typing)
song = "Telepatia";

// print the type of the variable you just changed (typeof)
console.log(typeof song);

// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?
const name = "Ethan Kovalenko";
let language = "JavaScript";
let time = 2;
let masterStatus = false;

console.log(
  "Hello, my name is " +
    name +
    ", and I am learning " +
    language +
    ". I have been practicing for only " +
    time +
    " weeks, so my status as a master is: " +
    masterStatus +
    "."
);
