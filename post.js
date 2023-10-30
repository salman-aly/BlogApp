//User create post 
var userPost = document.getElementById("userPost");
//For profile change
var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");

//get the username and password form Login form
var userName = document.getElementById("username");
var passWord = document.getElementById("pass");

var showPost = document.getElementById("display");

// var postUserName = document.getElementById("changePostName");

//get username from localstoarage and rename the username here
var dataBaseUserName = localStorage.getItem("username");

var postedPost = document.getElementById("newPost");


var userImage = document.getElementById("userImage");
var changeProfile = document.getElementById("userProfile");


userPost.innerHTML = `
  <div class="post">
    <h3>Create Blog</h3>
    <div class="hr"></div>
    <div class="flex">
      <div class="browser-img">
        <img id="userImage" src="${changeProfile}" alt="" />
      </div>
      <div class="user-details">
        <h2 id="changePostName">${dataBaseUserName}</h2>
        <div id="changePostUsername">@${dataBaseUserName}</div>
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
  localStorage.setItem('poststore', 'showPost');
  var showPost = document.getElementById("display").value

  if (showPost === "") {
    postedPost.style.display = "none";
    Swal.fire({
      text: `Please write something about this post!`
    });
  } else {
    postedPost.style.display = "block";
    postedPost.innerHTML += `
      <div class="newPost createdPost">
        <h3>Published Blog</h3>
        <p>${display.value}</p>
        <div class="social">
          <i class="bx bx-like" style="color: #ffffff"></i>
          <i class="bx bxs-chat" style="color: #ffffff"></i>
          <i class="bx bxs-share-alt" style="color: #ffffff"></i>
        </div>
      </div>
    `
    document.getElementById("display").value = ""
  }



}




// changeProfile.onchange = function () {
//     userImage.src = URL.createObjectURL(changeProfile.files[0])
// }


