// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays for different character types
const upperArr = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const lowerArr = "abcdefghijklmnopqrstuvwxyz";
const numbersArr = "0123456789";
const symbolsArr = '!@#$%^&*(){}[]=<>/;.';


// writePassword() is the function by which we are generating the password and then displaying it.
const writePassword = () => {

// generatePassword() is actively seeking which values to put into the password by converting what the user states they want in their password to true false values. It also guarantees that length meet certain parameters and that there is at least one value chosen. 
    const generatePassword = () => {
    let characters = "";
    let passwordArr = [];
    
    //sets parameters for length
    let length = prompt("How long do you want your password to be?");
    length = +length
    if (length < 8 || length > 128) {
            return alert("Your password must be between 8 and 128 characters.")
        } else if (isNaN(length)) {
            return alert("The length of your password must be a NUMBER, silly goose.")
        }
        
    //confirm windows to accept boolean values for the different character types.
    let hasUpper = confirm("Do you want uppercase letters in your password?"); 

    let hasLower = confirm("Do you want lowercase letters in your password?"); 

    let hasNumbers = confirm("Do you want numbers in your password?"); 

    let hasSymbols = confirm("Do you want special symbols, such as !%{ etc.,  in your password?"); 
    
    let typesCount = hasUpper + hasLower + hasNumbers + hasSymbols
    
    // if statement to ensure at least one character type has been chosen.
    if (typesCount === 0) {
        return alert("Your password must have at least one character type.")
    }


    
    // if statements that push one of that character type into the password array directly, then push their entire 'library,' as it were, into the character array, where the rest of the password will be pulled from.
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

    //for loop that will push the rest of the password to the password array. 
    for (let i = 0; i < length - typesCount; i++) {
        let num = Math.floor(Math.random() * characters.length)
        passwordArr.push(characters[num]);            
    }
    //this is where the final password lives. it is also the result we will get when we call generatePassword()
    return passwordArr.join("")
}
    //sets password equal to calling the generatePassword function
    let password = generatePassword();
    //links to an aspect of the html -- this is where password will display
    var passwordText = document.querySelector("#password");
    
    //makes it so 'undefined' does not appear in the #password text area
    if (password === undefined) {
        return "Your Secure Password";
    }

    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
