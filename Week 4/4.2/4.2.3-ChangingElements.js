// print the outer HTML of the navigation bar
console.log(document.querySelector(".nav-bar").outerHTML);

// print the inner HTML of the navigation bar
console.log(document.querySelector(".nav-bar").innerHTML);

// print the text content of the #class-schedule-list element
console.log(document.getElementById("class-schedule-list").textContent);

// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");
console.log(firstClassWeek);

// select the img element and add a src attribute
const image = document.getElementById("dog-picture");
image.src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

// change the font color of the h1 element
const headerOne = document.querySelector("h1");
headerOne.style.color = "blue";
