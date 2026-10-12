let fullName = document.getElementById('fullName');
//let lastName = document.getElementById('lastName');
//let otherNames = document.getElementById('otherNames');

let email = document.getElementById('emailPass');
let passWord = document.getElementById('passWord');
let confirmPass = document.getElementById('confirmPass');
let responseField = document.getElementById('responseField');

let userList = [];

function signUp() {
    let fullNameValue = fullName.value.trim();
    // let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passValue = passWord.value.trim();
    let confirmPassValue = confirmPass.value.trim();

    if (!fullNameValue) {
        responseField.innerHTML = 'Fullname is required.';
        return;

    } else if (fullNameValue.length < 2) {
        responseField.innerHTML = 'Fullname must be a minumum of 2 characters';
        return;

    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        responseField.innerHTML = 'Email is invalid';
        return;

    } else if (!passValue) {
        responseField.innerHTML = 'Please enter your password';
        return;

    } else if (passValue.length < 6) {
        responseField.innerHTML = 'Password must be more than 6 characters';
        return;

    } else if (!confirmPassValue) {
        responseField.innerHTML = 'Oga confirm your password';
        return;

    } else if (confirmPassValue !== passValue) {
        responseField.innerHTML = 'Password Mismatch';
        return;
    }

    // Check if the email already exists
    let userFound = userList.find((val) => {
        return val.email.toLowerCase() === emailValue.toLowerCase();
    });

    if (userFound) {
        responseField.innerHTML = 'User already exists. Please use different Email';
        alert('User already exist. Please use different Email');
        return;
    }

    // Register the user only if all validations pass
    userList.push({
        fullName: fullNameValue,
        email: emailValue,
        passWord: passValue,
        confirmPass: confirmPassValue
    });

    responseField.innerHTML = 'User signed up successfully';
    alert('User signed up successfully');

    console.log(userList);
    console.log(passValue);
    console.log(confirmPassValue);

    window.location.href = "dashBoard.html";
}