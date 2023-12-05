const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
nums.pop();
nums.pop();
console.log(nums);

// remove each of the first two items with shift(), saving each item to a variable
const shiftOne = nums.shift();
const shiftTwo = nums.shift();
console.log(nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(1);
nums.unshift(0);
nums.push(5);
nums.push(6);
console.log(nums);
