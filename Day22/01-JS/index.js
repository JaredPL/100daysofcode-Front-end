

let fullName = "Bro Code";
let firstName;
let lastName;

lastName = fullName.slice(4);
firstName = firstName.slice(0, 3);


firstName = firstName.slice(0, fullName.indexOf(" "))
lastName = fullName.slice(fullName.indexOf(" ") + 1);


