// VARIABLE DECLARATIONS

var specialChars = ["+", "$", "~"];
// using 3 values for now, can add more later
var numericChars = ["1", "2", "3"];
var lowerCaseChars = ["a", "b", "c"];
var upperCaseChars = ["A", "B", "C"];

var generateBtn = document.querySelector("#generate"); //storing a reference to the button Generate Password

// a prompt for how many chars they want?

// FUNCTIONS

// this function's purpose is getting a random element from an array
function random() {
  // using Math.floor and Math.random
  // --> pick an array

  var randomIndex = Math.floor(Math.random() * specialChars.length);
  console.log(randomIndex);

  var randomChar = specialChars[randomIndex];
  console.log(randomChar);
}

// purpose: figure out what the user wants in their password
function generatePassword() {
  var userCharsLength = prompt(
    "How many characters would you like your password to contain?"
  );

  var specialChars = confirm("Click ok to confirm special characters");

  var numericChars = confirm("Click ok to confirm numeric characters");

  var lowerCaseChars = confirm("Click ok to confirm lowerCase characters");

  var upperCaseChars = confirm("Click ok to confirm upperCase characters");

  console.log(userCharsLength);
  console.log(specialChars);
  console.log(numericChars);
  console.log(lowerCaseChars);
  console.log(upperCaseChars);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //storing a reference to the text area element

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log("Hello");
