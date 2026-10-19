let users = JSON.parse(localStorage.getItem('userPractice'))|| []
function signUp(event) {
    let fullNameField = document.getElementById('fullName').value.trim()
    let emailField = document.getElementById('email').value.trim()
    let passwordField = document.getElementById('passWord').value.trim()
    let confirmPasswordField = document.getElementById('confirmPassword').value.trim()
    let responsefield = document.getElementById('responsefield')
    
    if (!fullNameField || !emailField || !passwordField || !confirmPasswordField) {
        alert('All fields are mandatory')
    } else if (users.find((user) => {
     return user.email === emailField })){
      alert ('user already exists Brochacho')
    }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailField)) {
        responsefield.innerHTML = 'Email is invalid'
        responsefield.style.color = 'red'
        return;
    }else if (passwordField.length < 6){
      responsefield.innerHTML = `Password must be more than 8 characters`
      responsefield.style.color = 'red'
        return;
    } else if (passwordField !== confirmPasswordField) {
      responsefield.innerHTML = `Password Mismatch`
      responsefield.style.color = 'red'
        return;
    } else {
       
        let user = {
            fullName : fullNameField,
            email : emailField, 
            passWord : passwordField,
           // confirmPassword : confirmPasswordField
        }
        users.push(user)  
        localStorage.setItem('userPractice' , JSON.stringify(users))  
         alert('Sign Up Successfull')
        responsefield.innerHTML = ''
        location.href = 'newDashboard.html' 
        console.log(users);
        
    }
}