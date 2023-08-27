// VARIABLE DECLARATIONS

var specialChars = ["+", "$", "~", "!", "#", "%", "&", "~", "@", "?"];
// using 3 values for now, can add more later
var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var lowerCaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var generateBtn = document.querySelector("#generate"); //storing a reference to the button Generate Password

// FUNCTIONS

// purpose: figure out what the user wants in their password
function generatePassword() {
  var useCharsLength = prompt(
    "How many characters would you like your password to contain?"
  );
  if (useCharsLength < 8 || useCharsLength > 128) {
    prompt("Try again! Your password must be between 8-128 characters");
  }

  var useSpecialChars = confirm("Click ok to confirm special characters");

  var useNumericChars = confirm("Click ok to confirm numeric characters");

  var useLowerCaseChars = confirm("Click ok to confirm lowerCase characters");

  var useUpperCaseChars = confirm("Click ok to confirm upperCase characters");

  console.log(useCharsLength);
  console.log(useSpecialChars);
  console.log(useNumericChars);
  console.log(useLowerCaseChars);
  console.log(useUpperCaseChars);

  var userOptions = {
    willHaveSpecChars: useSpecialChars,
    willHaveNumChars: useNumericChars,
    willHaveLowChars: useLowerCaseChars,
    willHaveUpperChars: useUpperCaseChars,
  };

  var result = [];

  var possibleChars = [];

  // Purpose: generate a random character from a selected array
  function randomChar(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  if (userOptions.willHaveSpecChars) {
    possibleChars = possibleChars.concat(specialChars); // merge specialChars into possibleChars array
    console.log(possibleChars);
  }

  if (userOptions.willHaveNumChars) {
    possibleChars = possibleChars.concat(numericChars);
    console.log(possibleChars);
  }

  if (userOptions.willHaveLowChars) {
    possibleChars = possibleChars.concat(lowerCaseChars);
    console.log(possibleChars);
  }

  if (userOptions.willHaveUpperChars) {
    possibleChars = possibleChars.concat(upperCaseChars);
    console.log(possibleChars);
  }

  for (i = 0; i < useCharsLength; i++) {
    var selectedChar = randomChar(possibleChars);
    console.log(selectedChar);
    result.push(selectedChar);
  }

  var finalPassword = result.join(""); // needed to take everything that was in the array and combine it into a string so the textbox wouldnt say undefined anymore
  return finalPassword; // return exits out of this function and places final Password into the password var
}

//   var result = [];
//eventually, this array will store the random generated password. I will use the push method to add to this array and this is what I will return to the user

// purpose: to pull the password from generatePassword function and actually write it in the text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //storing a reference to the text area element

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log("Hello");
