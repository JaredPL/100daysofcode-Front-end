
const eye = document.querySelector(".fa-eye-slash");
const password = document.getElementById("password");

eye.addEventListener("click", () =>{
  if(eye.classList.contains("fa-eye-slash"))
  {
    eye.classList.replace("fa-eye-slash","fa-eye");
    password.type = "text";
  }
  else
  {
    eye.classList.replace("fa-eye","fa-eye-slash");
    password.type = "password";
  }
  
})