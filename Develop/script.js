 
 // 1. Create a serise of prompts so that it can be selected to make unique password.✅
  // 2. Give it a option for length of 8 - 128 characters.
  // 3. Make availible lowerCase, upperCase, numeric, and/or special characters.✅
  // 4. Have the option to select multiple types of characters or just a single type. 
  // 5. Have the password displyed in an alert or on the page. 

// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = [ "!", "#", "$", "%","&", "'", "(", ")", "*", "+", ",", "-",".","/",":", ";", "<", "=",">","?","@","[","]","^","_","`","{","|","}","~"]
var characterCode = Array.from(Array(26)).map((_,i) => i + 97);
var lowerCaseLetters = characterCode.map(code => String.fromCharCode(code))
var upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase())




// This fuction was referanced in writePassword but not made. This fuction will have the properties of the criteria.  
// The parameter is filled with the arrguments I want to be able to use to create the password. 
function generatePassword(withNumbers, withSymbols, withUpper, withLower){

  var length = prompt ("How long should the password be? 8-128")
  withNumbers = confirm ( "With numbers?")
  withSymbols = confirm (" With Symbols")
  withLower = confirm ("With Lower Case Letters?")
  withUpper= confirm ( "With Upper Case Letters?")

 var availibleCharacters = [
   ...(withNumbers ? numbers :[]),
   ...(withSymbols ? symbols :[]),
   ...(withUpper ? upperCaseLetters : []),
   ...(withLower ? lowerCaseLetters : []),

 ];


 var password = " ";


if(availibleCharacters.length === 0) return " ";


for(var i= 0; i < length; i++){
var randomIndex = Math.floor(Math.random() * availibleCharacters.length);
password += availibleCharacters[randomIndex];
 }


 


   return password;
  


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

