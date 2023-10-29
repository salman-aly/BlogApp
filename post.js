//User create post 
var userPost = document.getElementById("userPost");
//For profile change
var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");

//get the username and password form Login form
var userName = document.getElementById("username");
var passWord = document.getElementById("pass");

var showPost = document.getElementById("display")

// var postUserName = document.getElementById("changePostName");





userPost.innerHTML = `
  <div class="post">
    <h3>Create Blog</h3>
    <div class="hr"></div>
    <div class="flex">
      <div class="browser-img">
        <img id="userImage" src="images/userpicture.webp" alt="" />
      </div>
      <div class="user-details">
        <h2 id="changePostName">${userName}</h2>
        <div id="changePostUsername">@${userName}</div>
      </div>
    </div>
    <div>
      <input type="text" id="display" placeholder="What is happening?" />
    </div>
    <div class="icons">
      <i class="bx bx-image-add" style="color: #007fff"></i>
      <i class='bx bxs-file-gif' style='color:#007fff' ></i>
      <i class='bx bx-poll' style='color:#007fff' ></i>
      <i class='bx bx-smile' style='color:#007fff' ></i>
      <i class='bx bxs-location-plus' style='color:#007fff' ></i>
    </div>
    <button class="postBtn" onclick="post()">Post</button>
  </div>
`



function post() {
    localStorage.setItem("display", "showPost");

}

console.log("userName", userName)
// console.log("pst", showPost)