
const hamburger = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () =>{
  navbar.classList.toggle("active");
})

const signInButton = document.querySelector(".sign-in");
const signUpButton = document.querySelector(".sign-up");
const signInForm = document.querySelector(".sign-in-container");

signInButton.addEventListener("click", () =>{
  signInForm.classList.toggle("active");
});
