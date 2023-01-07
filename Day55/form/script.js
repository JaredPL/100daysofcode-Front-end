
const wrapper = document.querySelector(".wrapper");
const signupHeader = document.querySelector(".signup header");
const loginpHeader = document.querySelector(".login header");

loginpHeader.addEventListener("click", () =>{
  wrapper.classList.add("active");
})

signupHeader.addEventListener("click", () =>{
  wrapper.classList.remove("active");
})