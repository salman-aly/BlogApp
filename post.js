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
    <h3>Create Blog</h3>
    <div class="hr"></div>
    <div class="flex">
      <div class="browser-img">
        <img id="userImage" src="${changeProfile}" alt="" />
      </div>
      <div class="user-details">
        <h2 id="changePostName">${dataBaseUserName.toUpperCase()}<img src="images/Twitter_Verified_Badge.svg.webp" alt="" height="20px"></h2>
        <div id="changePostUsername">@${dataBaseUserName}22</div>
      </div>
    </div>
    <div id="editor">
      
    </div>
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
  var showPost = document.getElementById("editor").value

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
        <p>${quill.getText()}</p>
        <div class="social">
          <i class="bx bx-like" style="color: #ffffff"></i>
          <i class="bx bxs-chat" style="color: #ffffff"></i>
          <i class="bx bxs-share-alt" style="color: #ffffff"></i>
        </div>
      </div>
    `
    localStorage.setItem('poststore', quill.getText());
    document.getElementById("editor").value = ""
  }
}



function bgColorChange() {
  var img = document.getElementById("bx");
  img.style.display = "background-color='red'"
}



// changeProfile.onchange = function () {
//     userImage.src = URL.createObjectURL(changeProfile.files[0])
// }


