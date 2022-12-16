
function Open()
{
  let hamburger = document.getElementById("hamburger");
  let navlinks = document.getElementById("nav-links");

  if(navlinks.classList.contains("active"))
  {
    navlinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
  else
  {
    navlinks.classList.add("active");
    hamburger.classList.add("active");
  }
}
