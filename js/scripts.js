// login function
function Login() {
  fetch(
    `https://frozen-beyond-41947.herokuapp.com/user/${
      document.getElementById("logUsername").value
    }`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      user = data.user;
      console.log(user);

      // save user data to localStorage
      let storage = window.localStorage;
      storage.user_id = user.user_id;
      storage.username = user.username;
      storage.email = user.email;
      storage.password = user.password;
      storage.first_name = user.first_name;
      storage.last_name = user.last_name;
      storage.profile_img = user.profile_img;

      alert("Login successful");
      window.location = "./home.html";
    })

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
}

// get jwt token
function getToken() {
  fetch(`https://frozen-beyond-41947.herokuapp.com/auth`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("logUsername").value,
      password: document.getElementById("logPassword").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.access_token) {
        // if token successfully retrieved, save token and user login function
        window.localStorage.jwt = data.access_token;
        Login();
      } else {
        alert(data.description);
      }
    })

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
}

// click login button to get token and login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  getToken();
});

// register function (send details to backend)
function register() {
  console.log(
    document.getElementById("registerFirstName").value,
    document.getElementById("registerLastName").value,
    document.getElementById("registerEmail").value,
    document.getElementById("registerUsername").value,
    document.getElementById("registerPassword").value
  );
  fetch(`https://frozen-beyond-41947.herokuapp.com/user/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: document.getElementById("registerFirstName").value,
      last_name: document.getElementById("registerLastName").value,
      email: document.getElementById("registerEmail").value,
      username: document.getElementById("registerUsername").value,
      password: document.getElementById("registerPassword").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Register complete, proceed to login");
    })

    // error trapping
    .catch(function () {
      alert("something went wrong");
    });
}

// click register button to user register function
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

registerToggle = document.querySelector(".registerBtn");
signToggle = document.querySelector(".signBtn");

// toggle register and sign in forms
signToggle.addEventListener("click", toggleRegSign);
registerToggle.addEventListener("click", toggleRegSign);

// toggle forms function
function toggleRegSign() {
  document.getElementById("registerForm").classList.toggle("active");
  document.getElementById("loginForm").classList.toggle("active");
}
