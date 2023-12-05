// create an Array using an Array literal
let array = [1, "Hello", true, null];

// access the 1st item in the Array
let firstIndex = array[0];

// access the last item in the Array
// let lastIndex = array[3];

// print the length of the Array
console.log(array.length);

// use the length property to access the last item in the Array
let lastIndex = array[array.length - 1];

// with for...of, loop over the Array, modify the value and add to a different Array
let newArray = [];

for (let value of array) {
  value = value + 1;
  newArray.push(value);
}

console.log(newArray);
