var specialChars = ["+", "$", "~"];
var numericChars = ["1", "2", "3"];
var lowerCaseChars = ["a", "b", "c"];
var upperCaseChars = ["A", "B", "C"];

// this function's purpose is getting a random element from an array
function random(arr) {
  // using Math.floor and Math.random
  // --> pick an array

  //arr = ["+", "$", "~"]
  var randomIndex = Math.floor(Math.random() * arr.length);

  //   console.log(randomIndex);

  var randomChar = arr[randomIndex];
  console.log(randomChar);
}

random(specialChars); // tells JS to execute the function
random(numericChars);
random(lowerCaseChars);
random(upperCaseChars);
