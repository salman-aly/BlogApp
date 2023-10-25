var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");

var userName = document.getElementById("username").value
var passWord = document.getElementById("pass").value

// var signUpUsername = document.getElementById("username-signup").value
// var signUppassword = document.getElementById("pass-signup").value

// localStorage.setItem("username", JSON.stringify(signUpUsername));
// localStorage.setItem("password", JSON.stringify(signUppassword));

// var dataBaseUserName = JSON.parse(localStorage.getItem(signUpUsername));
// var dataBasepassword = JSON.parse(localStorage.getItem(signUppassword));

// console.log(dataBaseUserName)
// console.log(dataBasepassword)

var signUpUsername = document.getElementById("username-signup").value;
var signUppassword = document.getElementById("pass-signup").value;

localStorage.setItem("username", signUpUsername);
localStorage.setItem("password", signUppassword);

var dataBaseUserName = localStorage.getItem("username", signUpUsername);
var dataBasepassword = localStorage.getItem("password", signUppassword);

console.log(dataBaseUserName);
console.log(dataBasepassword);



// for login restriction
function login() {
    if (userName === "" || passWord === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username and password cant be empty!',
        });
    } else if (userName === dataBaseUserName && passWord === dataBasepassword) {
        alert("Login Successfully!");
        window.location.assign("start.html");
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
    var signUppassword = document.getElementById("pass-signup").value

    if (signUpUsername === "" || signUppassword === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cant signup without username and password!',
        });
    }

    // console.log("Username localStorage:", signUpUsername);
    // console.log("Password localStorage:", signUppassword);

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
