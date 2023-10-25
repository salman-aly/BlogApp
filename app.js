var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");

var userName = document.getElementById("username").value
var passWord = document.getElementById("pass").value

var signUpUsername = document.getElementById("username-signup").value;
var userPassword = document.getElementById("pass-signup").value;

localStorage.setItem("username", signUpUsername);
localStorage.setItem("password",userPassword);

var dataBaseUserName = localStorage.getItem("username", signUpUsername);
var dataBasepassword = localStorage.getItem("password",userPassword);

// console.log(signUpUsername, "user");
// console.loguserPassword, "pas");



// for login restriction
function login() {
    var userName = document.getElementById("username").value
    var passWord = document.getElementById("pass").value

    var signUpUsername = document.getElementById("username-signup").value;
    var userPassword = document.getElementById("pass-signup").value;

    if (userName === "" || passWord === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username and password cant be empty!',
        });
    } else if (userName == signUpUsername && passWord == userPassword) {
       alert("Login successfull!")
        window.location.assign("index1.html");
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter correct username and password!',
        });
    }
    var userName = document.getElementById("username").value = "";
    var passWord = document.getElementById("pass").value = "";
}

// for change profile image
changeProfile.onchange = function () {
    userImage.src = URL.createObjectURL(changeProfile.files[0])
}


// function for sign up form
function signUp() {
    var signUpUsername = document.getElementById("username-signup").value
    var userPassword = document.getElementById("pass-signup").value

    if (signUpUsername === "" ||userPassword === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cant signup without username and password!',
        });
    }

    localStorage.setItem("username", signUpUsername);
    localStorage.setItem("password",userPassword);

    // var signUpUsername = document.getElementById("username-signup").value = "";
    // var userPassword = document.getElementById("pass-signup").value = "";

    // console.log("Username localStorage:", signUpUsername);
    // console.log("Password localStorage:",userPassword);
}

// function for register form
function register() {
    var signup = document.getElementById("signUp").style.display = "block"
    var login = document.getElementById("form").style.display = "none"
}

// function for close sign up form
function closePopUp() {
    var signup = document.getElementById("signUp").style.display = "none"
    var login = document.getElementById("form").style.display = "flex"
}
