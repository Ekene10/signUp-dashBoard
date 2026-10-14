if (localStorage.getItem('loggedInUser')) {
    window.location.replace('dashboard.html')
}
let userList = JSON.parse(localStorage.getItem('user')) || []
let fullName = document.getElementById('fullName')
//let lastName = document.getElementById('lastName')
//let otherNames = document.getElementById('otherNames')
let email = document.getElementById('emailPass')
let passWord = document.getElementById('passWord')
let confirmPass = document.getElementById('confirmPass')
let responseField = document.getElementById('responseField')


function signUp() {
    let fullNameValue = fullName.value.trim()
    let emailValue = email.value.trim().toLowerCase()   // FIX: lowercase the email
    let passValue = passWord.value.trim()
    let confirmPassValue = confirmPass.value.trim()

    if (!fullNameValue) {
        responseField.innerHTML = 'Fullname is required.'
        responseField.style.color = 'red'
        return;
    } else if (fullNameValue.length < 2) {
        responseField.innerHTML = 'Fullname must be a minimum of 2 characters'
        responseField.style.color = 'red'
        return;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        responseField.innerHTML = 'Email is invalid'
        responseField.style.color = 'red'
        return;
    } else if (!passValue) {
        responseField.innerHTML = 'Please enter your password'
        responseField.style.color = 'red'
        return;
    } else if (passValue.length < 6) {
        responseField.innerHTML = 'Password must be at least 6 characters'
        responseField.style.color = 'red'
        return;
    } else if (!confirmPassValue) {
        responseField.innerHTML = 'Oga confirm your password'
        responseField.style.color = 'red'
        return;
    } else if (confirmPassValue !== passValue) {
        responseField.innerHTML = 'Password Mismatch'
        responseField.style.color = 'red'
        return;
    }

    let userFound = userList.find((val) => {
        return val.email === emailValue
    })

    if (userFound) {
        responseField.innerHTML = 'User already exists. Please use a different email.'
        responseField.style.color = 'red'
        return;
    }

    userList.push({
        fullName: fullNameValue,
        email: emailValue,
        passWord: passValue
    })

    localStorage.setItem('user', JSON.stringify(userList))

    responseField.innerHTML = 'User signed up successfully'
    responseField.style.color = 'green'
localStorage.setItem('loggedInUser', JSON.stringify({ fullName: fullNameValue, email: emailValue }))
    window.location.href = "dashboard.html";
}