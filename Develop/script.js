// Assignment Code
let generateBtn = document.querySelector("#generate");


//**********Ellin's code starts here *******/

// The default password components
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


let pswdLength = prompt("Please enter the length of the password. Size must be between 8-128");
if (pswdLength < 8) {
  pswdLength = prompt("Sorry, the number " + pswdLength + " is smaller than 8.\n You need to enter a number between 8 and 128.\n Please enter the length of the password.");
}
else if (pswdLength > 128) {
  pswdLength = prompt("Sorry, the number " + pswdLength + " is bigger than 128.\n You need to enter a number between 8 and 128.\n Please enter the length of the password.");
}
else {
  let shuffleThis = lowerCase;
  for (let i = 0; i < shuffleThis.length; i++) {
    console.log("shuffleThis[" + i + "] = " + shuffleThis[i]);
  }

  // let isSpecialChar = false; // initialization to indicate
  // let isNumericChar = false; // that the user just want a basic
  // let isUpperLowerCaseChar = false; // simple password

  isSpecialChar = prompt("Do you want to have special characters in the password?");
  if (isSpecialChar) {    
    console.log("**************inside isSpecialChar");    
    const specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    for (let i = 0; i<specialChar.length; i++) {
      shuffleThis.push(specialChar[i]);
      console.log("shuffleThis[" + i + "] = " + shuffleThis[i]);
    }
  }

  isNumericChar = prompt("Do you want to have numeric characters in the password?");
  if (isNumericChar) {
    console.log("**************inside isNumericChar");
    for (let i = 0; i<=9; i++) {
      shuffleThis.push(i);
    }
  }

  isUpperLowerCaseChar = prompt("Do you want to have a combination of lower and upper case letters in the password? Note: The default would be all lower case alphabet only.");
  if (isUpperLowerCaseChar) { 
    console.log("**********inside isUpperLowerCaseChar");   
    for (let i = 0; i<lowerCase.length; i++) {
      shuffleThis.push(lowerCase[i].toUpperCase());
      console.log("shuffleThis[" + i + "] = " + shuffleThis[i]);
    }
  }

  // Generating the random password
  for (let i = 0; i < pswdLength; i++) {
    var num = Math.floor(Math.random() * shuffleThis.length);
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
