
let age = 21;
let firstName = "Bro";
let student = false;


console.log("You are", age);
console.log("Hello", firstName);
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
