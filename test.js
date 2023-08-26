var text = ["abcdefghijklmnopqrstuvwxyz"];
var splitArray = text[0].split("");
// the zero index tells the new array to start from the 0 index of the old array
console.log(splitArray);

var capArray = text[0].toUpperCase();
var splitCapArray = capArray.split("");
console.log(capArray);
console.log(splitCapArray);
