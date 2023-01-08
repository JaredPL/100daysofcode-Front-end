
const subscribeBtn = document.querySelector(".sub");
const counter = document.querySelector(".counter");

let number = 56;
counter.innerHTML = number;

subscribeBtn.addEventListener("click", () =>{

  subscribeBtn.classList.toggle("active");

  if(subscribeBtn.classList.contains("active"))
  { 
    number += 1;
    counter.innerHTML = number;
    subscribeBtn.innerHTML = "subscribed";
  }
  else
  {
    number -= 1;
    counter.innerHTML = number;
    subscribeBtn.innerHTML = "subscribe";
  }

});
