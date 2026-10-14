if (!localStorage.getItem('loggedInUser')) {
    window.location.replace('signUp/login.html')
}

let input = document.getElementById('inp1')
let output = document.getElementById('output')

function postBtn() {
    let inputValue = input.value.trim()

    if (!inputValue) {
        alert('Oops.....sorry....Cannot post NothinG')
        return
    }

    output.innerHTML += `<div class="inputValueDiv">${inputValue} <button onclick="deleteBtn(this)" class="deleteBtn">Delete</button></div>`;

    console.log(inputValue);
    input.value = ''
}

function deleteBtn(button) {
    button.parentElement.remove()
}

function logOut() {
    localStorage.removeItem('loggedInUser')   // FIX: clear the login flag
    window.location.replace('signUp/login.html')
}

function logout() {   // FIX: same thing, so either button spelling works
    logOut()
}