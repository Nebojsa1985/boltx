const createAccount = document.querySelector("#createAccount");

const signupCheckbox = document.querySelector("#signupCheckbox");
const signupValidation = document.querySelector("#signupValidation");
const signupText = document.querySelector("#signupText");

const loginCheckbox = document.querySelector("#loginCheckbox");
const loginValidation = document.querySelector("#loginValidation");
const loginText = document.querySelector("#loginText");

const content = document.querySelector(".content");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const loginFormContainer = document.querySelector(".login-form-container");
const loginPasswordContainer = document.querySelector(
  ".login-password-container"
);
const loginResendContainer = document.querySelector(".login-resend-container");

const hamburgerBtn = document.querySelector(".navbar-hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerCloseBtn = document.querySelector(".hamburger-menu-close-btn");

let signedUp = false;

//Signup logic
signupCheckbox.addEventListener("click", () => {
  signedUp = true;
  signupCheckbox.style.display = "none";
  signupValidation.style.display = "block";
  signupText.style.color = "#666666";
  signupCheckbox.style.filter =
    "brightness(0) saturate(100%) invert(42%) sepia(1%) saturate(2102%) hue-rotate(334deg) brightness(94%) contrast(89%)";
});

signupValidation.addEventListener("click", () => {
  signedUp = false;
  signupCheckbox.style.display = "block";
  signupValidation.style.display = "none";
});

loginCheckbox.addEventListener("click", () => {
  loginCheckbox.style.display = "none";
  loginValidation.style.display = "block";
  loginCheckbox.style.filter =
    "brightness(0) saturate(100%) invert(42%) sepia(1%) saturate(2102%) hue-rotate(334deg) brightness(94%) contrast(89%)";
});

loginValidation.addEventListener("click", () => {
  loginCheckbox.style.display = "block";
  loginValidation.style.display = "none";
});

createAccount.addEventListener("click", () => {
  if (signedUp === false) {
    signupText.style.color = "#FF1934";
    signupCheckbox.style.filter =
      "brightness(0) saturate(100%) invert(33%) sepia(100%) saturate(6788%) hue-rotate(346deg) brightness(114%) contrast(101%)";
  }
});

//Login logic
let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const loginFormLostPasswordText = document.querySelector(
  "#loginFormLostPasswordText"
);
const loginFormLostPasswordInput = document.querySelector(
  "#loginFormLostPasswordInput"
);
const loginFormLostPasswordButton = document.querySelector(
  "#loginFormLostPasswordButton"
);

loginFormLostPasswordButton.addEventListener("click", () => {
  if (emailRegex.test(loginFormLostPasswordInput.value)) {
    loginFormLostPasswordButton.textContent = "Done!";
    loginFormLostPasswordInput.value = "";
    loginFormLostPasswordText.style.color = "";
    loginFormLostPasswordText.textContent =
      "We will send you an email with a magic recovery link to reset your password.";
  } else {
    loginFormLostPasswordText.style.color = "red";
    loginFormLostPasswordInput.value = "";
    loginFormLostPasswordText.textContent =
      "Sorry something went wrong, we can sent you link. Please try again.";
  }
});

const loginFormResendActivationEmailText = document.querySelector(
  "#loginFormResendActivationEmailText"
);
const loginFormResendActivationEmailInput = document.querySelector(
  "#loginFormResendActivationEmailInput"
);
const loginFormResendActivationEmailButton = document.querySelector(
  "#loginFormResendActivationEmailButton"
);

loginFormResendActivationEmailButton.addEventListener("click", () => {
  if (emailRegex.test(loginFormResendActivationEmailInput.value)) {
    loginFormResendActivationEmailButton.textContent = "Done!";
    loginFormResendActivationEmailInput.value = "";
    loginFormResendActivationEmailText.style.color = "";
    loginFormResendActivationEmailText.textContent =
      "We will send you an email with a magic recovery link to reset your password.";
  } else {
    loginFormResendActivationEmailText.style.color = "red";
    loginFormResendActivationEmailInput.value = "";
    loginFormResendActivationEmailText.textContent =
      "Sorry something went wrong, we can sent you link. Please try again.";
  }
});

//Display logic

const allContent = [
  content,
  signup,
  loginFormContainer,
  loginPasswordContainer,
  loginResendContainer,
];

function displayContent(cont, stil) {
  allContent.forEach((element) => {
    element.style.display = "none";
  });
  cont.style.display = stil;
}

document.querySelectorAll(".show-signup").forEach((element) => {
  element.addEventListener("click", () => {
    displayContent(signup, "grid");
    login.style.display = "none";
  });
});

document.querySelectorAll(".show-content").forEach((element) => {
  element.addEventListener("click", () => {
    displayContent(content, "block");
    login.style.display = "none";
  });
});

document.querySelectorAll(".show-login").forEach((element) => {
  element.addEventListener("click", () => {
    login.style.display = "block";
    displayContent(loginFormContainer, "grid");
  });
});

document.querySelectorAll(".show-login-password").forEach((element) => {
  element.addEventListener("click", () => {
    displayContent(loginPasswordContainer, "grid");
  });
});

document.querySelectorAll(".show-login-resend").forEach((element) => {
  element.addEventListener("click", () => {
    displayContent(loginResendContainer, "grid");
  });
});

//Hamburger buttons
hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.style.display = "flex";
});

hamburgerCloseBtn.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});

//Light-Dark Mode
let isLight = true;

function lightToggle() {
  if (isLight == true) {
    isLight = false;

    document.querySelector("body").style.background = "#2D2D2D";
    document.querySelector(".navbar").style.background = "#2D2D2D";
    document.querySelector(".container-one").style.background = "#666666";
    document.querySelector(".container-three").style.background =
      "rgba(255, 183, 105, 0.1)";
    document.querySelector(".container-four").style.background = "#2D2D2D";
    document.querySelector(".container-five").style.background = "#666666";
    document.querySelector(".footer-info-part-one").style.background =
      "#666666";
    document.querySelector(".footer-info-part-two").style.background =
      "#666666";
    document.querySelector(".footer-copyright").style.background = "#666666";
    document.querySelector(".signup").style.background = "#505050";
    document.querySelector(".login").style.background = "#505050";
    document.querySelector(".hamburger-menu").style.background = "#666666";

    document.querySelectorAll(".svg-img").forEach((element) => {
      element.style.filter =
        "brightness(0) saturate(100%) invert(94%) sepia(100%) saturate(0%) hue-rotate(232deg) brightness(106%) contrast(108%)";
    });

    document.querySelectorAll(".theme-text").forEach((element) => {
      element.style.color = "#fff";
    });
  } else {
    isLight = true;

    document.querySelector("body").style.background = "#e5e5e5";
    document.querySelector(".navbar").style.background = "#fafafa";
    document.querySelector(".container-one").style.background = "#fafafa";
    document.querySelector(".container-three").style.background =
      "rgba(255, 183, 105, 0.1)";
    document.querySelector(".container-four").style.background = "#fafafa";
    document.querySelector(".container-five").style.background =
      "rgba(215, 215, 215, 0.3)";
    document.querySelector(".footer-info-part-one").style.background =
      "#ffffff";
    document.querySelector(".footer-info-part-two").style.background =
      "#ffffff";
    document.querySelector(".footer-copyright").style.background = "#ffffff";
    document.querySelector(".signup").style.background =
      "rgba(255, 207, 155, 0.1)";
    document.querySelector(".login").style.background =
      "rgba(255, 207, 155, 0.1)";
    document.querySelector(".hamburger-menu").style.background = "#fafafa";
    document.querySelectorAll(".theme-text").forEach((element) => {
      element.style.color = "black";
    });
    document.querySelectorAll(".svg-img").forEach((element) => {
      element.style.filter = "";
    });
  }

  console.log(isLight);
}

document.querySelector("#lighter").addEventListener("click", lightToggle);
