function feed() {
  fetch(`https://frozen-beyond-41947.herokuapp.com/posts/1`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      posts = data.posts;
      document.querySelector(".postContainer").innerHTML = "";
      posts.forEach((post) => {
        document.querySelector(
          ".postContainer"
        ).innerHTML += `<div class="card">
                          <i class="fas fa-heart"></i>
                          <img src="${post.post_img}" alt="" />
                          <div class="usernameCaptionContainer">
                            <p class="username">${post.username}</p>
                            <p class="caption">${post.caption}</p>
                          </div>
                          <div class="commentsContainer">
                          </div>
                          <input
                            class="entryComment"
                            type="text"
                            placeholder="Add a comment..."
                          />
                        </div>`;
        fetch(
          `https://frozen-beyond-41947.herokuapp.com/comment/${post.post_id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            document.querySelector(".commentsContainer").innerHTML;
          });
      });
    });
}

feed();
