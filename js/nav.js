// close add post modal
document.querySelector(".cancelBtn").addEventListener("click", () => {
  document.querySelector(".modalContainer").classList.remove("active");
});

// click logo to go to homepage
document
  .querySelector(".logo")
  .addEventListener("click", () => (window.location = "./home.html"));

// click user icon to go to personal profile
document.querySelector(".fa-user").addEventListener("click", () => {
  console.log(window.localStorage.username);
  window.localStorage.profile = window.localStorage.username;
  window.location = "./profile.html";
});

// open add post modal
document.querySelector(".fa-plus").addEventListener("click", () => {
  document.querySelector(".modalContainer").classList.toggle("active");
});

function previewFile() {
  const file = document.querySelector(".imgInput").files[0];
  const preview = document.querySelector(".postImg");
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

document.querySelector(".imgInput").addEventListener("change", previewFile);

// send post to backend
document.querySelector(".postBtn").addEventListener("click", () => {
  console.log(
    window.localStorage.user_id,
    document.getElementById("caption").value,
    document.querySelector(".postImg").src,
    window.localStorage.username
  );
  fetch(`https://frozen-beyond-41947.herokuapp.com/post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage.jwt}`,
    },
    body: JSON.stringify({
      user_id: window.localStorage.user_id,
      caption: document.getElementById("caption").value,
      img: document.querySelector(".postImg").src,
      username: window.localStorage.username,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
      window.location.reload();
    })

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
});

// search that updates on typing
document.getElementById("search").addEventListener("keyup", (e) => {
  console.log(e.currentTarget.value);
  container = document.querySelector(".searchResult");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.innerHTML =
    '<img src="./loading-buffering.gif" alt="" class="loading" />';
  renderSearch(e.currentTarget.value);
});

// if click not on search modal, close results
window.addEventListener("click", (e) => {
  if (e.currentTarget != document.querySelector(".searchResult")) {
    document.querySelector(".searchResult").style.display = "none";
  }
});

// fetch and render search results
function renderSearch(username) {
  fetch(`https://frozen-beyond-41947.herokuapp.com/search/${username}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      users = data.users;
      container = document.querySelector(".searchResult");
      container.innerHTML = "";
      container.style.display = "block";
      users.forEach((user) => {
        img = user.profile_img;
        if (!img) img = "./63699.png";
        container.innerHTML += `
        <div class="resultItem">
          <img src="${img}" alt="" class="resultImg" />
          <p class="resultUsername">${user.username}</p>
        </div>
        `;

        // click result item to go to profile
        document.querySelectorAll(".resultItem").forEach((item) => {
          item.addEventListener("click", (e) => {
            window.localStorage.profile =
              e.currentTarget.querySelector(".resultUsername").innerHTML;
            window.location = "./profile.html";
          });
        });
      });
    })

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
}
