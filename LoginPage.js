const form = document.querySelector("form");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const formError = document.getElementById("formError");

usernameInput.addEventListener("input", function () {
  if (usernameInput.value.trim() !== "") {
    usernameInput.classList.remove("input-error");
    usernameError.textContent = "";
    formError.textContent = "";
  }
});

// Clear password error while typing
passwordInput.addEventListener("input", function () {
  if (passwordInput.value.trim() !== "") {
    passwordInput.classList.remove("input-error");
    passwordError.textContent = "";
    formError.textContent = "";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous states
  usernameInput.classList.remove("input-error");
  passwordInput.classList.remove("input-error");
  usernameError.textContent = "";
  passwordError.textContent = "";

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  //BOTH fields empty
  if (!username && !password) {
    usernameInput.classList.add("input-error");
    passwordInput.classList.add("input-error");
    formError.textContent = "*Both fields are required";
    return;
  }

  if (!username) {
    usernameInput.classList.add("input-error");
    usernameError.textContent = "*This field is required";

    setTimeout(() => {
      alert("Username is required");
    }, 0);

    return;
  }

  if (!password) {
    passwordInput.classList.add("input-error");
    passwordError.textContent = "*This field is required";

    setTimeout(() => {
      alert("Password is required");
    }, 0);

    return;
  }

  if (password.length < 6) {
    passwordInput.classList.add("input-error");
    passwordError.textContent = "Password must be at least 6 characters";

    setTimeout(() => {
      alert("Password must be at least 6 characters");
    }, 0);

    return;
  }

  // Clear username error while typing
  usernameInput.addEventListener("input", function () {
    if (usernameInput.value.trim() !== "") {
      usernameInput.classList.remove("input-error");
      usernameError.textContent = "";
      formError.textContent = ""; // also clear form-level error
    }
  });

  // Clear password error while typing
  passwordInput.addEventListener("input", function () {
    if (passwordInput.value.trim() !== "") {
      passwordInput.classList.remove("input-error");
      passwordError.textContent = "";
      formError.textContent = ""; // also clear form-level error
    }
  });

  alert("Login successful!");

  usernameInput.value = "";
  passwordInput.value = "";
});
