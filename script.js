var age = 20;
if(age > 18) {
  console.log("You are an adult");
}

var score = 45;
if (score <= 50) {
  console.log("You failed the test");
}

var name = "John";
if (name === "John") {
  console.log("Hello, John");
}

var day = "Monday";
if (day !== "Saturday" && day !== "Sunday") {
  console.log("It's a weekday");
}

var num = 10;
if (num % 2 === 0) {
  console.log("The number is even");
}

var char = 'a';
if (/^[A-Za-z]$/.test(char)) {
  console.log("It's a letter");
}

var list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}

var x = 5;
if (x > 0) {
  console.log("x is a positive number");
}

var y = -7;
if (y < 0) {
  console.log("y is a negative number");
}

var z = 9;
if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}

var gpa = 3.5;
if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}

var password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}

var age = 30;
if (age >= 18 && age <= 65) {
  console.log("You are of working age");
}

var color = "green";
if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}

function isNumber(input) {
  return !isNaN(input);}
var x = 10;
var y = "Hello";
console.log(isNumber(x));
console.log(isNumber(y));








