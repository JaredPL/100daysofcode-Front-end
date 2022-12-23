
const menu = document.querySelector(".fa-bars");
const navlinks = document.querySelector(".navlinks");

menu.addEventListener("click", () =>{
  if(menu.classList.contains("fa-bars"))
  {
    menu.classList.replace("fa-bars", "fa-xmark");
    navlinks.classList.add("active");
  }
  else
  {
    menu.classList.replace("fa-xmark", "fa-bars");
    navlinks.classList.remove("active");
  }
  
});