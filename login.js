if (localStorage.getItem('loggedInUser')) {
    window.location.replace('../dashboard.html')
}
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('logemail').value.trim();
    const password = document.getElementById('logpass').value;

    console.log('Email:', email);
    console.log('Password entered');

   // alert('Login form submitted!');
});

let users = JSON.parse(localStorage.getItem('user')) || []
function login(even) {
    even.preventDefault()                                   // FIX: stops the page refresh
    users = JSON.parse(localStorage.getItem('user')) || []  // FIX: reads the latest saved users

    let inputEmail = document.getElementById('logemail')
    let inputPass = document.getElementById('logpass')

    let userMail = inputEmail.value.trim().toLowerCase();   // FIX: uses the variables above
    let userPass = inputPass.value.trim();

    let userFound = users.find(value => {
       return (value.email === userMail) && (value.passWord === userPass)   // FIX: passWord, not password
    })

    if (userFound) {
        localStorage.setItem('loggedInUser', JSON.stringify({ fullName: userFound.fullName, email: userFound.email }))
        window.location.href = 'dashboard.html'   // FIX: login.html is inside signUp/, dashboard is one folder up
    } else{
        alert ('User not found')
    }
}