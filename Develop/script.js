 
 // 1. Create a serise of prompts so that it can be selected to make unique password.✅
  // 2. Give it a option for length of 8 - 128 characters.✅
  // 3. Make availible lowerCase, upperCase, numeric, and/or special characters.✅
  // 4. Have the option to select multiple types of characters or just a single type. ✅
  // 5. Have the password displyed in an alert or on the page. ✅

// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = [ "!", "#", "$", "%","&", "'", "(", ")", "*", "+", ",", "-",".","/",":", ";", "<", "=",">","?","@","[","]","^","_","`","{","|","}","~"]
//  This is a shorthand version of me writing each character out. I make an Array of an Array with a set of 26 undefined. 
// Then I call each iteam in the Arrray with .map and select the index to begin at 97, which is the code for the letter a in javascript. 

var characterCode = Array.from(Array(26)).map((_,i) => i + 97);
// Then I have to set that charactercode to the lowercase variabe and once again i need to call that element in that array to convert the code inorder to string.
var lowerCaseLetters = characterCode.map(code => String.fromCharCode(code))
// Then I have to do the same with the uppercase, but I can simply use .toUpperCase to change the code again.
var upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase())




// This fuction was referanced in writePassword but not made. This fuction will have the properties of the criteria.  
// The parameter is filled with the arrguments I want to be able to use to create the password. 
function generatePassword(withNumbers, withSymbols, withUpper, withLower){

//  I  used prompt in this variable becasue I need a number from the app user. 
  var length = prompt ("How long should the password be? 8-128" );

  while(isNaN(length)|| length< 8||length>128 ){

  length = prompt ("Password length can only be Numbers and Only 8 -128 characters?" );

}
  

  //  confirm to simplify the preference in these prompts.
  withNumbers = confirm ( "With numbers?")
  withSymbols = confirm (" With Symbols?")
  withLower = confirm ("With Lower Case Letters?")
  withUpper= confirm ( "With Upper Case Letters?")


// this variable here reads out the the parameres are met, and if so allwo the variable from numbers to be selected, if not : then given them an empty Array , disallowing the use of these character.   
 var availibleCharacters = [
   ...(withNumbers ? numbers :[]),
   ...(withSymbols ? symbols :[]),
   ...(withUpper ? upperCaseLetters : []),
   ...(withLower ? lowerCaseLetters : []),

 ];
 // This here helps replace the value of password so that everytime we use the function the password box is empty.
 var password = " ";

 // If user does not select any of the confirms then nothing will apper because of this.
 if(availibleCharacters.length === 0) return " ";


 //  for loop to helps me go through the index of avalibleCharacters.
 for(var i= 0; i < length; i++){
  // Here I have made a variable called randomIndex to have the value of a full interger generated at random by Math and its methods. 
 var randomIndex = Math.floor(Math.random() * availibleCharacters.length);
 password += availibleCharacters.at(randomIndex);
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



