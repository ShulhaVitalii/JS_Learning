
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!?@#$%^&*(){}[]:;_-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if(length <= 0){
        return `(Password len must be at least 1)`
    }
    if(allowedChars.length === 0){
        return `(Al least 1 set of charecters needs be selected)`
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password
}


function showGeneratedPassword(){
    const passwordLength = document.getElementById("passLength").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const passwordField = document.getElementById("password");

    password = generatePassword(passwordLength,
                    includeLowercase, 
                    includeUppercase, 
                    includeNumbers, 
                    includeSymbols);

    passwordField.textContent = password;

    console.log(`Generated password : ${password}`);
}
