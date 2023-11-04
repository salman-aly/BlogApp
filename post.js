var quill = new Quill('#editor', {
  theme: 'snow'
});
//User create post 
var userPost = document.getElementById("userPost");
//For profile change
var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");

//get the username and password form Login form
var userName = document.getElementById("username");
var passWord = document.getElementById("pass");

//get the quil editor 
var showPost = document.getElementById("editor");

// var postUserName = document.getElementById("changePostName");


//get username from localstoarage and rename the username here
var dataBaseUserName = localStorage.getItem("username");

//new post will display after posting
var postedPost = document.getElementById("newPost");

//userprofile change  
var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");

// // for posting blog
// userPost.innerHTML = `

// `
// for posted blog
function post() {
  var showPost = quill.root.innerHTML.trim();
  // console.log("show", showPost)
  if (showPost === "<p><br></p>") {
    postedPost.style.display = "none";
    Swal.fire({
      text: "Please say something about this post!"
    });
  } else {
    postedPost.style.display = "block";
    postedPost.innerHTML += `
      <div class="newPost createdPost">
       <h3>Published Blog</h3>
       <p>${showPost}</p>
      </div>
    `
    localStorage.setItem('poststore', showPost);
    quill.setText("");
  }
}

// for logout button
function logOut() {
  localStorage.clear()
  Swal.fire({
    icon: 'success',
    title: `${dataBaseUserName} logout successfully!`,
    showConfirmButton: false,
    timer: 1500
  });
  setTimeout(() => {
    window.location.assign("index.html")
  }, 2000)
}

//for regitration button
function loginn() {
  location.href = "index.html"
}
