// Assignment Code
var generateBtn = document.querySelector("#generate");

//Taking truthy or falsy values from checkboxes (along with number from Password length)
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const symbolsEl = document.getElementById("symbols");
const numbersEl = document.getElementById("numbers");

//jquery function that generates the numbered options for password length
$(function(){
    var $select = $("#length");
    for (i=8;i<=128;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

//arrays for different character types
const upperArr = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const lowerArr = "abcdefghijklmnopqrstuvwxyz";
const numbersArr = "0123456789";
const symbolsArr = '!@#$%^&*(){}[]=<>/;.';


// Write password to the #password input
function writePassword() {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasSymbols = symbolsEl.checked;
    const hasNumbers = numbersEl.checked;
    let typesUsed = [];
    let passwordArr = [];
    
    
    function generatePassword() {
        
        if (hasUpper === true) {
             typesUsed += upperArr.slice(0, upperArr.length);
        }

         if (hasLower === true) {
              typesUsed += lowerArr.slice(0, lowerArr.length);
         }

         if (hasNumbers === true) {
              typesUsed += numbersArr.slice(0, numbersArr.length);
         }

          if (hasSymbols === true) {
               typesUsed += symbolsArr.slice(0, symbolsArr.length);
          }

        for (let i = 0; i < length; i++) {
            let num = Math.floor(Math.random() * typesUsed.length)
            passwordArr.push(typesUsed[num]);            
        }
    }

    
    generatePassword() 
    const password = passwordArr.join("");

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

