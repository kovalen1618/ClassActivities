// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let stringVar = "apples";
let numVar = 12;
let boolVar = true;
let undefinedVar;
let nullVar = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof stringVar);
console.log(typeof numVar);
console.log(typeof boolVar);
console.log(typeof undefinedVarVar);
console.log(typeof nullVar);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let literal = `there are ${numVar}`;
let literalInception = `It's true, ${literal} ${stringVar}`;

// reassign the value of the variable that references "null"
nullVar = "Not null anymore";

// print the value and its type
console.log(nullVar);
console.log(typeof nullVar);

// print a variable that causes a ReferenceError
// console.log(nonexistantVar);
console.log(undefinedVar);

// alter the previous line to no longer cause a ReferenceError
