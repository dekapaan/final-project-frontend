// emoji array
let emojis = [
  "128512",
  "128513",
  "128514",
  "128515",
  "128516",
  "128517",
  "128518",
  "128519",
  "128520",
  "128521",
  "128522",
  "128523",
  "128524",
  "128525",
  "128526",
  "128527",
  "128528",
  "128529",
  "128530",
  "128531",
  "128532",
  "128533",
  "128534",
  "128535",
  "128536",
  "128537",
  "128538",
  "128539",
  "128540",
  "128541",
  "128542",
  "128543",
  "128544",
  "128545",
  "128546",
  "128547",
  "128548",
  "128549",
  "128550",
  "128551",
  "128552",
  "128553",
  "128554",
  "128555",
  "128555",
  "128557",
  "128558",
  "128559",
  "128560",
  "128561",
  "128562",
  "128563",
  "128564",
  "128565",
  "128566",
  "128567",
  "128577",
  "128578",
  "128579",
  "128580",
  "129296",
  "129297",
  "129298",
  "129299",
  "129300",
  "129301",
  "129313",
  "129314",
  "129315",
  "129316",
  "129317",
  "129319",
  "129320",
  "129321",
  "129322",
  "129323",
  "129324",
  "129325",
  "129326",
  "129327",
  "129488",
];

// default image for edit profile
default_img =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBpRXhpZgAASUkqAAgAAAABAA4BAgBHAAAAGgAAAAAAAABEZWZhdWx0IHByb2ZpbGUgcGljdHVyZSwgYXZhdGFyLCBwaG90byBwbGFjZWhvbGRlci4gVmVjdG9yIGlsbHVzdHJhdGlvbv/hBWtodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTIyMzY3MTM5MiIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuaXN0b2NrcGhvdG8uY29tL2xlZ2FsL2xpY2Vuc2UtYWdyZWVtZW50P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+Y3VtYWNyZWF0aXZlPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5EZWZhdWx0IHByb2ZpbGUgcGljdHVyZSwgYXZhdGFyLCBwaG90byBwbGFjZWhvbGRlci4gVmVjdG9yIGlsbHVzdHJhdGlvbjwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTEyMjM2NzEzOTItP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cv/tAJZQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAehwCUAAMY3VtYWNyZWF0aXZlHAJ4AEdEZWZhdWx0IHByb2ZpbGUgcGljdHVyZSwgYXZhdGFyLCBwaG90byBwbGFjZWhvbGRlci4gVmVjdG9yIGlsbHVzdHJhdGlvbhwCbgAYR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3Rv/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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zzzzyz//AP8A/wD/AP8A/wD+/wA88888888888888888888888888f8A/wD/AP8A/wD/AP8A/wC/zzzzzzzzzzzzzzzzzzzzzzzzzzzf/wD/AP8A/wD/AP8A/wD/ANPPPPPPPPPPPPPPPPPPPPPPPPPPH/8A/wD/AP8A/wD/AP8A/wDc88888888888888888888888888X/AP8A/wD/AP8A/wD/AP8Atzzzzzzzzzzzzzzzzzzzzzzzzzzzj/8A/wD/AP8A/wD/AP8A7888888888888888888888888888s3//AP8A/wD/AP8A/wDs88888888888888888888888888888/8A/wD/AP8A/wD+tzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxzf/8A/wD/APJzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwxjDjRzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxS8/wD/AP8A/wD/AP3/ANzzzzzzzzzzzzzzzzzzzzzzzzy//wD/AP8A/wD/AP8A/wD/AP8A/wDv408888888888888888888k//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AD8PPPPPPPPPPPPPPPPPJ/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AL1PPPPPPPPPPPPPPPLP/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wC/Tzzzzzzzzzzzzzhf/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AFPPPPPPPPPPPPPPP/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wDY88888888888888//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wA88888888888888/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD+vzzzzzzzzzzzzzT/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AM8888888888888//wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AO/zzzzzzzzzzzzzz/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A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";

if (window.localStorage["profile_img"] == "null") {
  window.localStorage.profile_img = default_img;
}

// render all profile info
function renderProfilePosts() {
  fetch(
    `https://frozen-beyond-41947.herokuapp.com/user-info/${window.localStorage["profile"]}/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${window.localStorage.jwt}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      user = data.user.user[0];
      window.localStorage.profile_user_id = user.user_id;
      if (user.profile_img) {
        window.localStorage.profile_view_img = user.profile_img;
      } else {
        window.localStorage.profile_view_img = default_img;
      }
      posts = data.user.posts;
      followers = data.user.followers;
      following = data.user.following;

      console.log(user, posts, followers, following);

      document.querySelector(".profileOuterContainer").innerHTML = `
      <img src="${window.localStorage.profile_view_img}" alt="image of ${window.localStorage.profile}" class="img"/>
      <div class="profileInnerContainer">
        <div class="userProfileContainer">
            <span class="username">${window.localStorage.profile}</span>
        </div>
        <div class="followContainer">
            <div class="posts"><span class="number">${posts.length}</span>posts</div>
            <div class="followers" onclick="toggleFollowModal(); JSON.parse(window.localStorage.followers).forEach(i => fetchFollowInfo(i))"><span class="followerNumber number">${followers.length}</span>Followers</div>
            <div class="following" onclick="toggleFollowModal(); JSON.parse(window.localStorage.following).forEach(i => fetchFollowInfo(i))"><span class="followingNumber number">${following.length}</span>Following</div>
        </div>
      </div>
      `;
      followerArr = [];
      followers.forEach((id) => {
        followerArr.push(id.follower);
      });

      followedArr = [];
      following.forEach((id) => {
        followedArr.push(id.followed);
      });
      window.localStorage.following = JSON.stringify(followedArr);
      window.localStorage.followers = JSON.stringify(followerArr);

      // profile viewed = user logged in render logout and edit profile buttons
      if (window.localStorage["profile"] == window.localStorage["username"]) {
        document.querySelector(
          ".userProfileContainer"
        ).innerHTML += `<div class="profileBtnContainer"><button class="editProfile">Edit Profile</button><button class="logout">Logout</button></div>`;
        document.querySelector(".logout").addEventListener("click", () => {
          window.localStorage.clear();
          alert("bye bye");
          window.location = "/index.html";
        });
      }

      // else render follow/unfollow button
      else {
        let result = followers.map((follower) => follower.follower);
        if (result.includes(parseInt(window.localStorage.user_id))) {
          document.querySelector(".profileInnerContainer").innerHTML +=
            '<button class="follow">Unfollow</button>';
          followBtn = document.querySelector(".follow");
          followBtn.addEventListener("click", () => {
            if (followBtn.innerHTML == "Unfollow") {
              followBtn.innerHTML = "Follow";
              document.querySelector(".followerNumber").innerHTML =
                parseInt(document.querySelector(".followerNumber").innerHTML) -
                1;
              unfollow();
            } else {
              document.querySelector(".followerNumber").innerHTML =
                parseInt(document.querySelector(".followerNumber").innerHTML) +
                1;

              followBtn.innerHTML = "Unfollow";
              follow();
            }
          });
        } else {
          document.querySelector(".profileInnerContainer").innerHTML +=
            '<button class="follow">Follow</button>';
          followBtn = document.querySelector(".follow");
          followBtn.addEventListener("click", () => {
            if (followBtn.innerHTML == "Follow") {
              document.querySelector(".followerNumber").innerHTML =
                parseInt(document.querySelector(".followerNumber").innerHTML) +
                1;

              followBtn.innerHTML = "Unfollow";
              follow();
            } else {
              followBtn.innerHTML = "Follow";
              document.querySelector(".followerNumber").innerHTML =
                parseInt(document.querySelector(".followerNumber").innerHTML) -
                1;
              unfollow();
            }
          });
        }
      }

      // toggle edit profile modal
      if (document.querySelector(".editProfile")) {
        document.querySelector(".editProfile").addEventListener("click", () => {
          toggleModal();
        });
      }

      // render user posts
      posts.forEach((post) => {
        document.querySelector(
          ".postContainer"
        ).innerHTML += `<div class="card" id="${post.post_id}">
                          <i class="fas fa-heart like"></i>
                          <img src="${post.post_img}" alt="" />
                          <div class="usernameCaptionContainer">
                            <p class="username">${post.username}</p>
                            <p class="caption">${post.caption}</p>
                          </div>
                          <div class="commentsContainer">
                          </div>
                          <div class="entryCommentContainer">
                            <div class="emojiContainer">
                            </div>
                            <button class="emojiButton"><i class="fas fa-smile"></i></button>
                            <input
                              class="entryComment"
                              type="text"
                              placeholder="Add a comment..."
                            />
                            <button class="commentButton"><i class="fas fa-chevron-right"></i></button>
                          </div>
                        </div>`;

        // if profile viewed = logged user, add delete post button
        if (window.localStorage["profile"] == window.localStorage["username"]) {
          document.querySelectorAll(".card").forEach((card) => {
            card.innerHTML += `<i class="fas fa-trash-alt"></i>`;
          });

          // click bin on post to delete
          document.querySelectorAll(".fa-trash-alt").forEach((button) => {
            button.addEventListener("click", (e) => {
              deletePost(e.currentTarget.parentElement.id);
            });
          });
        }

        // click username to view profile
        document.querySelectorAll(".username").forEach((username) => {
          username.addEventListener("click", (e) => {
            console.log(e.currentTarget.innerHTML);
            window.localStorage["profile"] = e.currentTarget.innerHTML;
            window.location = "./profile.html";
          });
        });

        // toggle emoji container
        document.querySelectorAll(".emojiButton").forEach((button) => {
          button.addEventListener("click", (e) => {
            e.currentTarget.parentElement
              .querySelector(".emojiContainer")
              .classList.toggle("active");
          });
        });

        // populate emoji container
        document.querySelectorAll(".emojiContainer").forEach((container) => {
          emojis.forEach((emoji) => {
            container.innerHTML += `<span class="emoji">&#${emoji}</span>`;
          });
        });

        // add emoji to comment
        document.querySelectorAll(".emoji").forEach((press) => {
          press.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.querySelector(
              ".entryComment"
            ).value += e.currentTarget.innerHTML;
          });
        });

        // click comment button to render and send comment to backend
        document.querySelectorAll(".commentButton").forEach((button) => {
          button.addEventListener("click", (e) => {
            sendNewComment(e.currentTarget);
          });
        });

        // like and unlike post
        document.querySelectorAll(".like").forEach((button) => {
          button.addEventListener("click", (e) => {
            if (e.currentTarget.classList.contains("active")) {
              unlike(e.currentTarget.parentElement.id);
              e.currentTarget.classList.remove("active");
            } else {
              e.currentTarget.classList.add("active");
              like(e.currentTarget.parentElement.id);
            }
          });
        });
        fetch(
          `https://frozen-beyond-41947.herokuapp.com/comment/${post.post_id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `jwt ${window.localStorage.jwt}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            comments = data.comment;
            comments.forEach((comment) => {
              if (comment.post_id == post.post_id) {
                document
                  .getElementById(`${post.post_id}`)
                  .querySelector(".commentsContainer").innerHTML += `
                <div class="comment">
                  <span class="commentUsername">${comment.username}</span>
                  <span class="commentQuote">${comment.comment}</span>
                </div>
                `;
              }
              document
                .querySelectorAll(".commentUsername")
                .forEach((username) => {
                  username.addEventListener("click", (e) => {
                    window.localStorage["profile"] = e.currentTarget.innerHTML;
                    window.location = "./profile.html";
                  });
                });
            });
          })
          .catch(function () {
            alert("something went wrong");
          });
      });
      getLike();
    })
    .catch(function () {
      alert("something went wrong");
    });
}

function toggleFollowModal() {
  document.querySelector(".userContainer").innerHTML = "";
  document.querySelector(".followOuter").classList.toggle("active");
}

document
  .querySelector(".followClose")
  .addEventListener("click", toggleFollowModal);

renderProfilePosts();

function like(post_id) {
  console.log("post_id", post_id);
  console.log("user_id", window.localStorage["user_id"]);
  console.log(window.localStorage.user_id);
  fetch(`https://frozen-beyond-41947.herokuapp.com/like/${post_id}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage.jwt}`,
    },
    body: JSON.stringify({
      user_id: window.localStorage.user_id,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(document.getElementById(`${post_id}`));
    })
    .catch(function () {
      alert("something went wrong");
    });
}

function getLike() {
  fetch(
    `https://frozen-beyond-41947.herokuapp.com/user-like/${parseInt(
      window.localStorage.user_id
    )}/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${window.localStorage.jwt}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      likes = data.likes;
      likes.forEach((like) => {
        document.querySelectorAll(".like").forEach((button) => {
          console.log("b", like.post_id);
          if (button.parentElement.id == like.post_id) {
            console.log("whoa");
            button.classList.add("active");
          }
        });
      });
    })
    .catch(function () {
      alert("something went wrong");
    });
}

function sendNewComment(element) {
  comment = element.parentElement.querySelector(".entryComment").value;
  element.parentElement.parentElement.querySelector(
    ".commentsContainer"
  ).innerHTML += `<div class="comment">
                    <span class="commentUsername">${window.localStorage["username"]}</span>
                    <span class="commentQuote">${comment}</span>
                  </div>`;
  document.querySelectorAll(".commentUsername").forEach((username) => {
    username.addEventListener("click", (e) => {
      console.log(e.currentTarget.innerHTML);
      window.localStorage["profile"] = e.currentTarget.innerHTML;
      window.location = "./profile.html";
    });
  });
  fetch(`https://frozen-beyond-41947.herokuapp.com/comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage.jwt}`,
    },
    body: JSON.stringify({
      post_id: element.parentElement.parentElement.id,
      comment: comment,
      user_id: window.localStorage["user_id"],
      username: window.localStorage["username"],
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function () {
      alert("something went wrong");
    });
}

function popEdit() {
  document.querySelector(".editProfileInner").innerHTML = `
  <i class="fas fa-times profileClose"></i>
  <div class="imgContainer">
    <img src="${window.localStorage["profile_img"]}" alt="" class="editImg"/>
    <div class="usernameDpChange">
      <p class="editUsername">${window.localStorage.username}</p>
      <input type="file" name="file" style="width: 0.1; height: 0.1; opacity: 0; position: absolute;" id="imgEntry"/>
      <label for="file">Change Profile Photo</label>
    </div>
  </div>
  <div class="firstNameContainer">
    <p class="firstNameHeading">First Name</p>
    <input type="text" id="firstNameEntry" value="${window.localStorage.first_name}"/>
  </div>
  <div class="lastNameContainer">
    <p class="lastNameHeading">Last Name</p>
    <input type="text" id="lastNameEntry" value="${window.localStorage.last_name}"/>
  </div>
  <div class="emailContainer">
    <p class="emailHeading">Email</p>
    <input type="text" id="emailEntry" value="${window.localStorage.email}"/>
  </div>
  <div class="usernameContainer">
    <p class="usernameHeading">Username</p>
    <input type="text" id="usernameEntry" value="${window.localStorage.username}"/>
  </div>
  <div class="passwordContainer">
    <p class="passwordHeading">Password</p>
    <input type="text" id="passwordEntry" value="${window.localStorage.password}"/>
  </div>
  <button class="saveChanges">Save Changes</button>
  `;
  document.getElementById("imgEntry").addEventListener("change", () => {
    previewFile();
  });
  document.querySelector(".saveChanges").addEventListener("click", () => {
    editProfile();
  });
  document.querySelector(".fa-times").addEventListener("click", () => {
    toggleModal();
  });
}

function toggleModal() {
  document.querySelector(".editProfileOuter").classList.toggle("active");
}

popEdit();

function previewFile() {
  const file = document.getElementById("imgEntry").files[0];
  const preview = document.querySelector(".editImg");
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

function editProfile() {
  console.log(
    document.getElementById("firstNameEntry").value,
    document.getElementById("lastNameEntry").value,
    document.getElementById("emailEntry").value,
    document.getElementById("usernameEntry").value,
    document.getElementById("passwordEntry").value,
    document.querySelector(".editImg").src
  );
  fetch(
    `https://frozen-beyond-41947.herokuapp.com/user/${window.localStorage.user_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${window.localStorage.jwt}`,
      },
      body: JSON.stringify({
        first_name: document.getElementById("firstNameEntry").value,
        last_name: document.getElementById("lastNameEntry").value,
        email: document.getElementById("emailEntry").value,
        username: document.getElementById("usernameEntry").value,
        password: document.getElementById("passwordEntry").value,
        profile_img: document.querySelector(".editImg").src,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
      window.localStorage.profile =
        document.getElementById("usernameEntry").value;
      window.localStorage.username =
        document.getElementById("usernameEntry").value;
      window.localStorage.profile_img = document.querySelector(".editImg").src;
      window.location.reload();
    })
    .catch(function () {
      alert("something went wrong");
    });
}

function follow() {
  fetch(
    `https://frozen-beyond-41947.herokuapp.com/follow/${window.localStorage.user_id}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${window.localStorage.jwt}`,
      },
      body: JSON.stringify({
        followed: window.localStorage.profile_user_id,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(function () {
      alert("something went wrong");
    });
}

function unfollow() {
  fetch(
    `https://frozen-beyond-41947.herokuapp.com/follow/${window.localStorage.user_id}/`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `jwt ${window.localStorage.jwt}`,
      },
      body: JSON.stringify({
        followed: window.localStorage.profile_user_id,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(function () {
      alert("something went wrong");
    });
}

function deletePost(post_id) {
  fetch(`https://frozen-beyond-41947.herokuapp.com/delete_post/${post_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function () {
      alert("something went wrong");
    });
}

function fetchFollowInfo(user_id) {
  fetch(`https://frozen-beyond-41947.herokuapp.com/followers/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage.jwt}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      info = data.followers[0];
      img = info.profile_img;

      if (!img) {
        img = default_img;
      }
      document.querySelector(".userContainer").innerHTML += `
      <div class="user" id="${info.username}">
        <img class="followProfile" src="${img}" alt="image of ${info.username}">
        <p class="FollowUsername">${info.username}</p>
      </div>`;

      document.querySelectorAll(".user").forEach((user) => {
        user.addEventListener("click", (e) => {
          window.localStorage.profile = e.currentTarget.id;
          window.location.reload();
        });
      });
    })
    .catch(function () {
      alert("something went wrong");
    });
}

// unlike function
function unlike(post_id) {
  fetch(`https://frozen-beyond-41947.herokuapp.com/like/${post_id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage.jwt}`,
    },
    body: JSON.stringify({
      user_id: window.localStorage.user_id,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
}
