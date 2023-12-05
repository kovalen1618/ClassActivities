// select the root node
const root = document.querySelector("body").parentElement;
console.log(root);

// select the last child of the root node
const lastRootChild = document.querySelector("html").lastChild;
console.log(lastRootChild);

// select all the children of the body element
const bodyChildren = document.querySelector("body").children;
console.log(bodyChildren);

// select the next sibling of the h2 node
const h2Sibling = document.querySelector("h2").nextSibling;
console.log(h2Sibling);

// select the parent element of the h1 node
const h1Parent = document.querySelector("h1").parentNode;
console.log(h1Parent);
