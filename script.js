// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here
function generatePassword () {

    //Set up Arrays for all possible combinations
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
  var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

  //Set up prompts 
  var chooseLength = window.prompt("Must Choose Password Between 8 - 128 Characters");
  var chooseNumb = confirm("Would You like Password to Contain Numbers?");
  var UppercaseLetters = confirm("Would You like Password to Contain Uppercase Letters?");
  var LowerCaseLetters = confirm("Would You like Password to Contain Lowercase Letters?");
  var SpecialChar = confirm("Would You like Password to special characters?");

  //If statements for what User chooses.
  var userchoices = []
  var passwordGen = []
  //Use Concatenation to combine different strings you created in the arrays
  if (chooseNumb) {
      userchoices = userchoices.concat(Numbers);
  }

  if (UppercaseLetters) {
    userchoices = userchoices.concat(uppercaseLetters);
  }

  if (LowerCaseLetters) {
    userchoices = userchoices.concat(lowercaseLetters);
  }

  if (SpecialChar) {
    userchoices = userchoices.concat(specialCharacters);
  }

  for (var i = 0; i < chooseLength; i++) {
    
    passwordGen.push(userchoices[Math.floor(Math.random()*userchoices.length)]);

      
  }

  return passwordGen.join("")

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
