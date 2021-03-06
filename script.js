// Assignment Code
var generateBtn = document.querySelector("#generate");

var passUpperCase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ"
var passLowerCase = "abcdefghijklmnopqurstuvwxyz"
var passNum = "0123456789"
var specChar = "!@#$%^&*()"
//var password - prompt("Please enter your password")

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz0123456789!@#$%^&*()";
  var charset = "";
  
    var finalPassword="";
   

    var passLength = prompt("Choose between 8 - 128 Characters");
    console.log(passLength);

    var wantsUpperCase = confirm("Do you want uppercase letters");
    console.log(wantsUpperCase);
    if(wantsUpperCase){
      charset+= passUpperCase;

    var wantsLowerCase = confirm("Do you want lowercase letter");
    console.log(wantsLowerCase);
  if(wantsLowerCase){
    charset+= passLowerCase;

    var wantsNum = confirm("Do you want numbers");
    console.log(wantsNum);

    var wantsSpecChar = confirm("Do you want special characters");
    console.log(wantsSpecChar);
  }
    }
  
 
  

for (let i = 0, n = charset.length; i < passLength; i++) {
    finalPassword += charset.charAt(Math.floor(Math.random() * n));
}
return finalPassword;
} 
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword); {
  generatePassword("demo").innerHTML = "Hello World"
};
