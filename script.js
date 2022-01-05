// Assignment Code
var generateBtn = document.querySelector("#generate");

//Taking truthy or falsy values from checkboxes (along with number from Password length)
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const symbolsEl = document.getElementById("symbols");
const numbersEl = document.getElementById("numbers");


// Write password to the #password input
function writePassword() {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasSymbols = symbolsEl.checked;
    const hasNumbers = numbersEl.checked;
    let typesUsed = [];
    let forArray = [];
    
    
    function generatePassword() {
        
        if (hasUpper === true) {
             typesUsed.push(generateRandomUpper());
        }

        if (hasLower === true) {
             typesUsed.push(generateRandomLower());
        }

        if (hasSymbols === true) {
             typesUsed.push(generateRandomSymbol());
        }

        if (hasNumbers === true) {
             typesUsed.push(generateRandomNumber());
        }

        for (let i = 0; i < length; i++) {
            let num = Math.floor(Math.random() * typesUsed.length)
            forArray.push(typesUsed[num]);            
        }
    }

    const password = generatePassword() 
    


    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(forArray.join(''))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//String.fromCharCode is accessing from here --- https://net-comber.com/charset.html

function generateRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/;.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
