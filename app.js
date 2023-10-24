var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");

// for login restriction
function login() {
    var userName = document.getElementById("username").value
    var passWord = document.getElementById("pass").value


    if (userName === "" || passWord === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username and password cant be empty!',
        });
    } else if (userName === 'smit' && password === 'smit') {
        alert("Login Successfully!");
        window.location.assign("start.html");
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter correct username and password!',
        });
    }
}

// for change profile image
changeProfile.onchange = function () {
    userImage.src = URL.createObjectURL(changeProfile.files[0])
}