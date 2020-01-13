// Assignment Code
let generateBtn = document.querySelector("#generate");


//**********Ellin's code starts here *******/
let pswdLength = prompt("Please enter the length of the password. Size must be between 8-128");

if (pswdLength < 8) {
  pswdLength = prompt("Sorry, the number " + pswdLength + " is smaller than 8.\n You need to enter a number between 8 and 128.\n Please enter the length of the password.");
}
else if (pswdLength > 128) {
  pswdLength = prompt("Sorry, the number " + pswdLength + " is bigger than 128.\n You need to enter a number between 8 and 128.\n Please enter the length of the password.");
}
else {
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCase;
  for (let i = 0; i<upperCase.length < i++) {
    upperCase= lowerCase[i].toUpperCase();
    console.log("lowerCase[i] = " + lowerCase[i]);
  }

  const specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

  let isSpecialChar = false; // initialization to indicate
  let isNumericChar = false; // that the user just want a basic
  let isUpperLowerCaseChar = false; // simple password
  isSpecialChar = alert("Do you want to have special characters in the password?");
  isNumericChar = alert("Do you want to have numeric characters in the password?");
  isUpperLowerCaseChar = alert("Do you want to have a combination of lower and upper case letters in the password? Note: The default would be all lower case.");

  for (let i = 0; i < pswdLength; i++) {
    // Generate a random decimal number between 0 and 25
    var num = Math.floor(Math.random() * 26);
    // Display in console
    console.log(num);
}
}



//**********Ellin's code ends here *******/

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
