// Named Parameters
// // write a function that takes two named parameters:
// // print each named parameter,
// // then return the parameters added together
// function twoParameters(paramOne, paramTwo) {
//   return paramOne + paramTwo;
// }

// // invoke the function and pass in two numbers
// twoParameters(5, 10);

// // invoke the function and pass in more than two numbers
// twoParameters(5, 10, 20, 30);

// // invoke the function and pass in only one number
// twoParameters(5);

// // change the function to set default values for the parameters
// function twoParameters(paramOne = 7, paramTwo = 14) {
//   return paramOne + paramTwo;
// }

// // again, invoke the function and pass in only one number
// twoParameters(12);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function twoParameters(...params) {
  console.log(...params);
}

// again, invoke the function and pass in more than two numbers
twoParameters(2, 4);
