let users = JSON.parse(localStorage.getItem('userPractice')) || []
let currentUserIndex = JSON.parse(localStorage.getItem('currentUserIndex'))
  // userEmailField.innerHTML = currentUser.emailField

let currentUser =users[currentUserIndex] 
function post() {
    let titleInput = document.getElementById('inputTitle')
    let textInput = document.getElementById('textArea')
    let title = titleInput.value.trim()
    let textPost = textInput.value.trim()
    let output = document.getElementById('output')
    if (!title || !textPost) {
    output.innerHTML= responseField;
    return;
}
    let responseField =  `<div class="post">
    <div class="post-head">
        <div class="avatar">E</div>
        <div>
            <div class="author">Ekene</div>
            <div class="date">${new Date().toLocaleDateString("en-GB", {day:"numeric", month:"short", year:"numeric"})}</div>
        </div>
    </div>
    <h3>${title}</h3>
    <p>${textPost}</p>
    
</div>`
    
  //  output.innerHTML += 
   
    output.innerHTML = responseField + output.innerHTML
     titleInput.value = ''
    textInput.value = ''
}
function authenticateUser(params) {
    if (!currentUser) {
        location.href = 'newLogin.html'
    } else {
        let userEmailField = document.getElementById('userEmailField');

        
    } if (userEmailField) {
        userEmailField.innerHTML = currentUser.emailField
    }
}
authenticateUser()
function logOut() {
    let logOutUser = confirm("Are you sure you want to log out?")
    if (logOutUser) {
        localStorage.removeItem('currentUserIndex')
        window.location.href = "newlogin.html";
    }
}
