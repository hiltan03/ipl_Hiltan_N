function login() 
{   // You can perform login validation and authentication here // For simplicity, let's just display an alert

    let nameElement = document.getElementById("loginUsername");
    let passwordElement = document.getElementById("loginPassword");

    if(!nameElement || !passwordElement)
    {
        console.error("All login fields not found in DOM");
        return;
    }

    let name = nameElement.value.trim();
    let password = passwordElement.value;



   console.log(`Login clicked. Username: ${name}, Password: ${password}`);
    
}

function register() 
{
    // Frontend validation for registration form// Validate email format
    // Validate username (no special characters)
    // Validate password (at least 8 characters, one capital letter, and one numeric)
    let username = document.getElementById("registerName").value;

    let usernamePattern = /^[A-Za-z0-9]+$/;
    // if(!usernamePattern.test(username))
    // {
    //     alert("Invalid Username: Username cannot contain special characters.");
    // }

    let password = document.getElementById("registerPassword").value;

    let passwordPattern  = /^(?=.*[A-Z])(?=.*\d).+$/;
    if(!passwordPattern.test(password) || password.length < 8)
    {
        alert("Invalid Password");
    }

    let email = document.getElementById("registerEmail").value;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email))
    {
        alert("Invalid Email!");
    }

    let fullname = document.getElementById("registerUsername").value.trim();

    console.log(`Register clicked. Name: ${username}, Email: ${email}, Username: ${fullname}, Password: ${password}`);
    
}
module.exports = { login, register };
