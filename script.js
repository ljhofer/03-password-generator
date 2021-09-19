// Defines global variables
var numberOfCharacters = ""
var allowSpecialCharacters = ""
var allowNumbers = ""
var allowLowerCase = ""
var allowUpperCase = ""

var allowedCharacters = []
var passwordCharacters = ""

var specialCharacters = [".", "!", "?", "#", "$", "%", "&", "@", "^", "*", "(", ")", "=", ":", ";"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function to prompt user to enter a number of characters and validates if the user inputs an amount outside of the given parameters: 
function askHowManyCharacters() {
  var numCharacters = window.prompt("How any character would you like in the password? Choose a number between 8 and 128.");
  numberOfCharacters = parseInt(numCharacters);  

  // Still need a while function here: 
if (numberOfCharacters < 8 || numberOfCharacters > 128)
  window.prompt("Your number was not between 8 and 128. Please choose a number between 8 and 128.");
}

// Function that has user confirm which character types to include in the password: 
function confirmCharacterTypes() {
  allowSpecialCharacters = window.confirm("Would you like to include special characters in the password?");
  
  allowNumbers = window.confirm("Would you like to include numbers in the password?");
  
  allowLowerCase = window.confirm("Would you like to include lower case letters in the password?");
  
  allowUpperCase = window.confirm("Would you like to include uppper case letters in the password?");

//  Add while loop here:
  if (!allowSpecialCharacters && !allowNumbers && !allowLowerCase && !allowUpperCase) {
    window.prompt("You haven't chosen any characters. Please select again");
  }
}
  
//Function that generates string of random characters from chosen character types:
function genCharacterArray () {
  if (allowSpecialCharacters) {
    allowedCharacters = allowedCharacters.concat(specialCharacters);
  }

  if (allowNumbers) {
    allowedCharacters = allowedCharacters.concat(numbers);
  }

  if (allowLowerCase) {
    allowedCharacters = allowedCharacters.concat(lowerCase);
  }

  if (allowUpperCase) {
    allowedCharacters = allowedCharacters.concat(upperCase);
  }
}

//Function for generating a string of random characters for password
function genRandomChars() {
  for (var i = 0; i < numberOfCharacters; i++) {
    passwordCharacters+= allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
  }
}


// // Function to call the other functions to generate passwork:
function generatePassword() {
  askHowManyCharacters();
  confirmCharacterTypes();
  genCharacterArray();
  genRandomChars();
  return passwordCharacters;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
