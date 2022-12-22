
let left = document.getElementById("left");
let reset = document.getElementById("reset");
let right = document.getElementById("right");
let counter = document.getElementById("counter");
let count = 0;
let imageBtn = document.querySelector(".uil");

imageBtn.onclick = () =>{
  document.body.style.backgroundImage = "url(chirstmas2.jpg)";
}

left.onclick = () =>{
  count-=1
  counter.innerHTML = count;
}

reset.onclick = () =>{
  count=0;
  counter.innerHTML = count;
}

right.onclick = () =>{
  count+=1
  counter.innerHTML = count;
}

