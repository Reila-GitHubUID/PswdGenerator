// Assignment Code
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

function generatePassword() {
        // The default password components
        const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let correct = true;


        let pswdLength = prompt("Please enter the length of the password. Size must be between 8-128");
        while (correct) {
          if (pswdLength < 8) {
            pswdLength = prompt("Sorry, the number " + pswdLength + " is smaller than 8.\n You need to enter a number between 8 and 128.\nPlease enter the length of the password.");
          }
          else if (pswdLength > 128) {
            pswdLength = prompt("Sorry, the number " + pswdLength + " is bigger than 128.\n You need to enter a number between 8 and 128.\nPlease enter the length of the password.");
          }
          else
            correct = false;
        }


        let shuffleThis = lowerCase;

        isSpecialChar = confirm("Do you want to have special characters in the password?");
        if (isSpecialChar) {    
          const specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
          shuffleThis = shuffleThis.concat(specialChar);
        }

        isNumericChar = confirm("Do you want to have numeric characters in the password?");
        if (isNumericChar) {
          for (let i = 0; i<=9; i++) {
            shuffleThis.push(i);
          }
        }

        isUpperLowerCaseChar = confirm("Do you want to have a combination of lower and upper case letters in the password? Note: The default would be all lower case alphabet only.");
        if (isUpperLowerCaseChar) { 
          const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];shuffleThis = shuffleThis.concat(upperCase);
        }

        let randomPassword = "";
        // Generating the random password
        for (let i = 0; i < pswdLength; i++) {
          var num = Math.floor(Math.random() * shuffleThis.length);
          randomPassword = randomPassword + shuffleThis[num];
        }

  return randomPassword;
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
  
  /* Get the text field */
  let copyText = document.querySelector("#password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  console.log("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);