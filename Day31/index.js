
// const Heading = document.getElementById('Heading');

// console.log(Heading);
//console.log(typeof Heading);

//const Heading2 = document.getElementById('Heading');
//console.log(Heading2);

// const list = document.getElementById("list");

//list.textContent= "Hi there";

// console.log(list.textContent);

// list.innerHTML = "<h1>Hi there</h1>";

// console.log(list.innerHTML);

// const list = document.querySelector(".list");

// console.log(list);

// const li = document.querySelector("li");
// console.log(li);

// const lis = document.querySelectorAll("li");
// console.log(lis);

// const listItems = document.querySelectorAll(".list-item");
// console.log(listItems);

//const heading = document.getElementById("Heading");
// heading.style.color = "red";
// heading.style.backgroundColor = "black";

//heading.className = "changeBG";
//heading.className = "changeFT";

//heading.className += " changeFT";

// heading.classList.add("changeCL");
// heading.classList.remove("changeCL");

// const lis = document.querySelectorAll("li");

//lis[1].style.backgroundColor = "red";

// for(let i=0; i<lis.length; i++)
// {
//   lis[i].style.backgroundColor = "royalblue";
// }

// lis[0].style.cssText = "background-color: coral; color: white; font-size: 25px;";

const heading = document.querySelector('.Heading');
const btn = document.querySelector('.btn');

// btn.onclick = () => {
//   console.log("Clicked");
// };

// btn.onmouseover = () => {
//   heading.style.cssText = 'background: brown; color: white;';
// }

// btn.onmouseout = () => {
//   heading.style.cssText = 'background: white; color: black;';
// }

// const clickButton = () => {
//   console.log("Clicked!");
// }
// btn.addEventListener('click', e => {
//   //heading.style.cssText = 'background: brown; color: white;';
//   console.log(e.target);
// });

// const paragraph = document.querySelector(".paragraph");
// console.log(paragraph.getAttribute("id"));
// console.log(paragraph.getAttribute("class"));

// paragraph.setAttribute("style", "background-color: coral");

// paragraph.removeAttribute("style");

// console.log(paragraph.hasAttribute("style"));
// console.log(paragraph.hasAttribute("class"));

const listItem = document.getElementById("list-item");

// console.log(listItem.parentNode);
// console.log(listItem.parentNode.parentNode);

const list = document.querySelector(".list");
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.firstChild);
// console.log(list.firstElementChild);

//console.log(listItem.previousElementSibling);

const newEl = document.createElement("li");

const text = document.createTextNode("Blog");

newEl.appendChild(text);

console.log(newEl);

list.appendChild(newEl);

list.insertBefore(newEl, list.children[1]);

list.removeChild(newEl);

console.log(list);










