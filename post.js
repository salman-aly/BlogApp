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

var showPost = document.getElementById("editor");

// var postUserName = document.getElementById("changePostName");

//get username from localstoarage and rename the username here
var dataBaseUserName = localStorage.getItem("username");

//new post will display after posting
var postedPost = document.getElementById("newPost");

//userprofile change 
var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");


userPost.innerHTML = `
  <div class="post">
    <div class="h-flex">
     <img src="images/572.png" height="45px" alt="">
     <button class="logoutBtn" onclick="logOut()">Logout</button>
    </div>
    <div class="hr"></div>
    <div class="flex">
      <div class="browser-img">
        <img id="userImage" src="images/userpicture.webp" alt="" />
      </div>
      <div class="user-details">
        <h2 id="changePostName">${dataBaseUserName.toUpperCase()}<img src="images/Twitter_Verified_Badge.svg.webp" alt="" height="20px"></h2>
        <div id="changePostUsername">@${dataBaseUserName}22</div>
      </div>
    </div>
    <button class="postBtn" onclick="post()">Post</button>
    <div class="icons">
      <i class="bx bx-image-add" style="color: #007fff" id="bx" onclick="bgColorChange()"></i>
      <i class='bx bxs-file-gif' style='color:#007fff' ></i>
      <i class='bx bx-poll' style='color:#007fff' ></i>
      <i class='bx bx-smile' style='color:#007fff' ></i>
      <i class='bx bxs-location-plus' style='color:#007fff' ></i>
    </div>
    
  </div>
`

function post() {
  var showPost = quill.root.innerHTML.trim();

  if (showPost === "") {
    postedPost.style.display = "none";
    Swal.fire({
      text: `Please say something about this post!`
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

function logOut(){
  localStorage.clear()
  window.location.assign("index.html")
}




function bgColorChange() {
  var img = document.getElementById("bx");
  img.style.display = "background-color='red'"
}



// changeProfile.onchange = function () {
//     userImage.src = URL.createObjectURL(changeProfile.files[0])
// }