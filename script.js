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
const typesUsed = []




// Write password to the #password input
const writePassword = () => {

    const generatePassword = () => {
    let characters = "";
    let passwordArr = [];

    let length = prompt("How long do you want your password to be?");
    length = +length
    if (length < 8 || length > 128) {
            return alert("Your password must be between 8 and 128 characters.")
        } else if (isNaN(length)) {
            return alert("The LENGTH of your password must be a number, silly goose.")
        }
    
    let hasUpper = confirm("Do you want uppercase letters in your password?"); // OK = true, Cancel = false

    let hasLower = confirm("Do you want lowercase letters in your password?"); // OK = true, Cancel = false

    let hasNumbers = confirm("Do you want numbers in your password?"); // OK = true, Cancel = false

    let hasSymbols = confirm("Do you want special symbols in your password?"); // OK = true, Cancel = false

    if (hasUpper === true) {
        passwordArr.push(upperArr[Math.floor(Math.random() * upperArr.length)]);
        characters += upperArr;
    }

    if (hasLower === true) {
        passwordArr.push(lowerArr[Math.floor(Math.random() * lowerArr.length)]);
        characters += lowerArr;
    }

    if (hasNumbers === true) {
        passwordArr.push(numbersArr[Math.floor(Math.random() * numbersArr.length)]);
        characters += numbersArr;
    }

    if (hasSymbols === true) {
        passwordArr.push(symbolsArr[Math.floor(Math.random() * symbolsArr.length)]);
        characters += symbolsArr;
    }
    
    console.log(passwordArr.join(""));

    let typesCount = hasUpper + hasLower + hasNumbers + hasSymbols
       console.log(`Number of typseUsed: ${typesCount}`);

    for (let i = 0; i < length - typesCount; i++) {
        let num = Math.floor(Math.random() * characters.length)
        passwordArr.push(characters[num]);            
    }
    //   for (let i = 1; i < typesCount; i++) {
    //       const element = typesCount[i];     
    //   }

    return passwordArr.join("")
}

    // generatePassword() 
    let password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    console.log(`This is the console log of the password, which is equal  to the generate password function ${password}`)



    // IF I FEEL SO INCLINED TO SHUFFLE THE ARRAY.
    // function shuffle(array) {
    //     let currentIndex = array.length,  randomIndex;
      
    //     // While there remain elements to shuffle...
    //     while (currentIndex != 0) {
      
    //       // Pick a remaining element...
    //       randomIndex = Math.floor(Math.random() * currentIndex);
    //       currentIndex--;
      
    //       // And swap it with the current element.
    //       [array[currentIndex], array[randomIndex]] = [
    //         array[randomIndex], array[currentIndex]];
    //     }
      
    //     return array;
    //  }





}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//THIS FUNCTION WORKS! DONT GET RID OF UNLESS IVE COME TO ANOTHER SOLUTION
//THIS FUNCTION WORKS! DONT GET RID OF UNLESS IVE COME TO ANOTHER SOLUTION
//THIS FUNCTION WORKS! DONT GET RID OF UNLESS IVE COME TO ANOTHER SOLUTION
// function writePassword() {
//     const length = +lengthEl.value;
//     const hasUpper = uppercaseEl.checked;
//     const hasLower = lowercaseEl.checked;
//     const hasSymbols = symbolsEl.checked;
//     const hasNumbers = numbersEl.checked;
//     let typesUsed = [];
//     let passwordArr = [];
    
    
//     function generatePassword() {
//         //need to use .concat here instead of slice
//         if (hasUpper === true) {
//              typesUsed += upperArr.slice(0, upperArr.length);
//         }

//          if (hasLower === true) {
//               typesUsed += lowerArr.slice(0, lowerArr.length);
//          }

//          if (hasNumbers === true) {
//               typesUsed += numbersArr.slice(0, numbersArr.length);
//          }

//           if (hasSymbols === true) {
//                typesUsed += symbolsArr.slice(0, symbolsArr.length);
//           }

//         for (let i = 0; i < length; i++) {
//             let num = Math.floor(Math.random() * typesUsed.length)
//             passwordArr.push(typesUsed[num]);            
//         }
//     }

    
//     generatePassword() 
//     const password = passwordArr.join("");

//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
// }



//declare a variable like password option that variable object

// let sign = prompt("What's your sign?");

// if (sign.toLowerCase() == "scorpio") {
//   alert("Wow! I'm a Scorpio too!") }