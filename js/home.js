// emoji code array
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

// fetch and render posts
function feed(user_id) {
  fetch(`https://frozen-beyond-41947.herokuapp.com/posts/${user_id}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage.jwt}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      posts = data.posts[0];
      posts = posts.sort((firstEl, secondEl) => {
        return firstEl.post_id < secondEl.post_id;
      });
      console.log(posts);
      document.querySelector(".postContainer").innerHTML = "";
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

        // click post username to view profile
        document.querySelectorAll(".username").forEach((username) => {
          username.addEventListener("click", (e) => {
            console.log(e.currentTarget.innerHTML);
            window.localStorage["profile"] = e.currentTarget.innerHTML;
            window.location = "./profile.html";
          });
        });

        // open emoji container
        document.querySelectorAll(".emojiButton").forEach((button) => {
          button.addEventListener("click", (e) => {
            e.currentTarget.parentElement
              .querySelector(".emojiContainer")
              .classList.toggle("active");
          });
        });

        // render emojis
        document.querySelectorAll(".emojiContainer").forEach((container) => {
          emojis.forEach((emoji) => {
            container.innerHTML += `<span class="emoji">&#${emoji}</span>`;
          });
        });

        // send emoji to comment
        document.querySelectorAll(".emoji").forEach((press) => {
          press.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.querySelector(
              ".entryComment"
            ).value += e.currentTarget.innerHTML;
          });
        });

        // render comment and send comment to backend
        document.querySelectorAll(".commentButton").forEach((button) => {
          button.addEventListener("click", (e) => {
            sendNewComment(e.currentTarget);
          });
        });

        // like and unlike
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

        // fetch and render comments
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

              // click comment username to view profile
              document
                .querySelectorAll(".commentUsername")
                .forEach((username) => {
                  username.addEventListener("click", (e) => {
                    console.log(e.currentTarget.innerHTML);
                  });
                });
            });
          })

          // error trapping
          .catch(function () {
            alert("something went wrong");
          });
      });

      // get and render likes
      getLike();
    })

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
}

// fetch and render posts
feed(window.localStorage["user_id"]);

// like function
function like(post_id) {
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

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
}

// fetch and render likes
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
        // add active class to liked posts
        document.querySelectorAll(".like").forEach((button) => {
          console.log("b", like.post_id);
          if (button.parentElement.id == like.post_id) {
            console.log("whoa");
            button.classList.add("active");
          }
        });
      });
    })

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
}

// render comment function
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
      window.location = "/profile.html";
    });
  });
  console.log(
    element.parentElement.parentElement.id,
    comment,
    window.localStorage["user_id"],
    window.localStorage["username"]
  );
  sendComment(element.parentElement.parentElement.id, comment);
}

// send comment to backend
function sendComment(post_id, comment) {
  fetch(`https://frozen-beyond-41947.herokuapp.com/comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage.jwt}`,
    },
    body: JSON.stringify({
      post_id: post_id,
      comment: comment,
      user_id: window.localStorage["user_id"],
      username: window.localStorage["username"],
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
