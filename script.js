// Define global variables
var numberOfCharacters = ""
var allowSpecialCharacters = ""
var allowNumbers = ""
var allowLowerCase = ""
var allowUpperCase = ""

var allowedCharacters = ""

var specialCharacters = [".", "!", "?", "#", "$", "%", "&", "@", "^"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// function askHowManyCharacters() {
  var numCharacters = window.prompt("How any character would you like in the password? Choose a number between 8 and 128.");
  numberOfCharacters = parseInt(numberOfCharacters);  
  console.log(numberOfCharacters);

  // If number isn't between 8 and 128:
if (numberOfCharacters < 8 || numberOfCharacters < 128)
console.log("Please choose a number between 8 and 128.");
// }


// function askSpecialCharacters() {
  allowSpecialCharacters = window.confirm("Would you like to include special characters?");
  console.log(allowSpecialCharacters);
// }


// function askNumbers() {
  allowNumbers = window.confirm("Would you like to include numbers?");
  console.log(allowNumbers);
// }


// function askLowerCase() {
 allowLowerCase = window.confirm("Would you like to include lower case letters?");
  console.log(allowLowerCase);
// }


// function askUpperCase() {
  allowUpperCase = window.confirm("Would you like to include uppper case letters?");
  console.log(allowUpperCase);
// }


  
//If all characters are chosen:
if (allowSpecialCharacters) {
  console.log("Use special characters.");
}

if (allowNumbers) {
  console.log("Use numbers.");
}

if (allowLowerCase) {
  console.log("Use lower case.");
}

if (allowUpperCase) {
  console.log ("Use upper case.")
}
  
  
//allowedCharacters= ["specialCharacters", "numbers", "lowerCase", "upperCase"];


//If no characters are chosen:
if (!allowSpecialCharacters && !allowNumbers && !allowLowerCase && !allowUpperCase) {
  console.log("You haven't chosen any characters. Please select again");
}







// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
