website:  https://jimmysolis.github.io/PasswordGen/




Challenge 02-Done!

Needed alot of help and growth in this challenge but it finally works.

The first task was to make a funtion for generate a password. 

There where no variables for the numbers, symbols, and Upper & Lower case letter. There I made an array for each.

The upperCaseLetters and lowerCaseLetters array was made through creating an array that held an array to minimize the having to type all the letters out.  26 undefiend variables was made possisble through the .from() method found in a youtubeVideo. .from() is a method thatcreates an array like variable. Within it I made a new array and set it to 26 undefined variables to equal the amount of letters in the alphabet. Then with .map which can call each variable in that arry and I set the index to start at the number 97 which is where the charactercode begins in. Next I created a new variable and called itlowerCaseLetters and set it eqaul to characterCode.map,I wanted to be able to once again call on the variables in charctercode to transform the code base letter to the actual string know to us. This was made possible through the help of James Q Quick for coming up with this very educational alternative. I feel like I have a better understanding of how maps work.

I had to also make sure I set a while loop inorder to meet the critirea of only 8-128 characters and as well as only numbers. Which was done with the help of my friend Aexander Hacker. We disscussed that the paramerters needed to have a need to be a number so a isNaN help us in achiving to secure that it was. 

Made the promts nessecary to take the input and inform the passwordGenorator. Then I set the the paramiter to when eqaul true to grab characters from specific array. 

 
 // 1. Create a serise of prompts so that it can be selected to make unique password.✅
  // 2. Give it a option for length of 8 - 128 characters.✅
  // 3. Make availible lowerCase, upperCase, numeric, and/or special characters.✅
  // 4. Have the option to select multiple types of characters or just a single type. ✅
  // 5. Have the password displyed in an alert or on the page. ✅

