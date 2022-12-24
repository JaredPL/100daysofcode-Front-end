
const eye = document.querySelectorAll(".fa-eye-slash");
const password = document.querySelectorAll(".password");

const member = document.getElementById("member");
const member2 = document.getElementById("member2");
const login = document.querySelector(".container1");
const signup = document.querySelector(".container2");

eye.forEach(eyeIcon =>{
  eyeIcon.addEventListener("click", () =>{
    password.forEach(pw =>{
      if(pw.type === "password")
      {
        pw.type = "text";
        eye.forEach(icon =>{
          icon.classList.replace("fa-eye-slash", "fa-eye");
        })
      }
      else
      {
        pw.type = "password";
        eye.forEach(icon =>{
          icon.classList.replace("fa-eye", "fa-eye-slash");
        })
      }
    })
  })
})

member.addEventListener("click", () =>{
  if(login.classList.contains("active"))
  {
    login.classList.remove("active");
  }
  else
  {
    login.classList.add("active");
    signup.classList.add("active");
  }
})

member2.addEventListener("click", () =>{
  if(signup.classList.contains("active"))
  {
    login.classList.remove("active");
    signup.classList.remove("active");
  }
}) 