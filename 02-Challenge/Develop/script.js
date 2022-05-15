
// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ("a");

// This fuction was referanced in writePassword but not made. This fuction will have the properties of the criteria.  
function generatePassword(){
  // 1. Create a serise of prompts so that it can be selected to make unique password.
  // 2. Give it a option for length of 8 - 128 characters.
  // 3. Make availible lowerCase, upperCase, numeric, and/or special characters.
  // 4. Have the option to select multiple types of characters or just a single type. 
  // 5. Have the password displyed in an alert or on the page. 
  
  
  console.log( lowerCase)
  return 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
