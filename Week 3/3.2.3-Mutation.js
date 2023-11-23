let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};

// reassign x, y, and z to FALSY values
x = 0;
y = false;
z = false;

// print x, y, and z
console.log(x);
console.log(y);
console.log(z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = "";
// b = false;
// c = false;

// using BRACKET NOTATION, assign a value to b
b[0] = 1;

// using DOT NOTATION, assign a PROPERTY to c
c.keyOne = 1;

// using DOT NOTATION, assign a METHOD to c
c.methodKey = function returnFive() {
  return 5;
};

// using BRACKET NOTATION, call the method in c
console.log(c.methodKey());

// print a, b, and c
console.log(a);
console.log(b);
console.log(c);
