const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let aFirstIndex = arr.indexOf("a");
let bFirstIndex = arr.indexOf("b");
let cFirstIndex = arr.indexOf("c");
let firstIndexArray = [aFirstIndex, bFirstIndex, cFirstIndex];
console.log(firstIndexArray);

// find the last index of "a", "b", and "c"
let aLastIndex = arr.lastIndexOf("a");
let bLastIndex = arr.lastIndexOf("b");
let cLastIndex = arr.lastIndexOf("c");
let lastIndexArray = [aLastIndex, bLastIndex, cLastIndex];
console.log(lastIndexArray);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

// If the first instance index of "a" does NOT equal the last instance index of "a", keep looping
while (aFirstIndex !== aLastIndex) {
  // Remove the value of "a" at the last index of it
  arr.splice(aLastIndex, 1);
  // Update aLastIndex to move down the index to the new last instance of "a"
  aLastIndex = arr.lastIndexOf("a");
}

console.log(arr);
