// Assignment Code
let generateBtn = document.querySelector("#generate");


//**********Ellin's code starts here *******/
let pswdLength = prompt("Please enter the length of the password. Size must be between 8-128");

let isSpecialChar = false; // initialization that indicates
let isNumericChar = false; // that the user just want a basic
let isUpperLowerCaseChar = false; // simple password
let pswdLength = prompt("Please enter the length of the password. Size must be between 8-128");
let isSpecialChar = alert("Do you want to have special characters in the password?");
let isNumericChar = alert("Do you want to have numeric characters in the password?");
let isUpperLowerCaseChar = alert("Do you want to have a combination of lower and upper case letters in the password? Note: The default would be all lower case.");




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
