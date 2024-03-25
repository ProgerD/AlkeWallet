//js login

const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click", ()=>{
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", ()=>{
    container.classList.add("toggle");
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    // Check if username and password match
    if (email === 'mardonesalv' && password === '1234') {
        // Redirect to
        window.location.href = 'pages/menu.html';
    } else {
        // Show error message
        alert('Usuario o contraseña incorrectos.');
    }
});