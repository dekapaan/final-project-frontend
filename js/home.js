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

        document.querySelectorAll(".username").forEach((username) => {
          username.addEventListener("click", (e) => {
            console.log(e.currentTarget.innerHTML);
            window.localStorage["profile"] = e.currentTarget.innerHTML;
            window.location = "./profile.html";
          });
        });
        document.querySelectorAll(".emojiButton").forEach((button) => {
          button.addEventListener("click", (e) => {
            e.currentTarget.parentElement
              .querySelector(".emojiContainer")
              .classList.toggle("active");
          });
        });

        document.querySelectorAll(".emojiContainer").forEach((container) => {
          emojis.forEach((emoji) => {
            container.innerHTML += `<span class="emoji">&#${emoji}</span>`;
          });
        });
        document.querySelectorAll(".emoji").forEach((press) => {
          press.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.querySelector(
              ".entryComment"
            ).value += e.currentTarget.innerHTML;
          });
        });
        document.querySelectorAll(".commentButton").forEach((button) => {
          button.addEventListener("click", (e) => {
            sendNewComment(e.currentTarget);
          });
        });
        document
          .getElementById(`${post.post_id}`)
          .querySelector(".commentsContainer").innerHTML += `
                      <div class="viewComments">View all comments</div>`;

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
              document.querySelectorAll(".comment").forEach((container) => {
                if (
                  container.querySelector(".commentUsername").innerHTML ==
                  window.localStorage.username
                ) {
                  container.innerHTML += `<i class="fas fa-trash" id="${comment.comment_id}"></i>`;
                }
                document.querySelectorAll(".fa-trash").forEach((button) => {
                  button.addEventListener("click", () => {
                    console.log("bop");
                    deleteComment(button.id);
                  });
                });
              });
              document
                .querySelectorAll(".commentUsername")
                .forEach((username) => {
                  username.addEventListener("click", (e) => {
                    console.log(e.currentTarget.innerHTML);
                  });
                });
            });
          })
          .catch(alert("something went wrong"));
      });
      getLike();
    })
    .catch(alert("something went wrong"));
}

feed(window.localStorage["user_id"]);

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
    .catch(alert("something went wrong"));
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
    .catch(alert("something went wrong"));
}

function sendNewComment(element) {
  comment = element.parentElement.querySelector(".entryComment").value;
  element.parentElement.parentElement.querySelector(
    ".commentsContainer"
  ).innerHTML += `<div class="comment">
                    <span class="commentUsername">${window.localStorage["username"]}</span>
                    <span class="commentQuote">${comment}</span>
                  </div>`;
  document.querySelectorAll(".comment").forEach((container) => {
    document.querySelectorAll(".fa-trash").forEach((button) => {
      button.addEventListener("click", () => {
        console.log("bop");
        deleteComment(button.id);
      });
    });
  });
  document.querySelectorAll(".commentUsername").forEach((username) => {
    username.addEventListener("click", (e) => {
      console.log(e.currentTarget.innerHTML);
      window.localStorage["profile"] = e.currentTarget.innerHTML;
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
    .catch(alert("something went wrong"));
}

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
    .catch(alert("something went wrong"));
}

function deleteComment(comment_id) {
  fetch(`https://frozen-beyond-41947.herokuapp.com/comment/${comment_id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage.jwt}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(alert("something went wrong"));
}
