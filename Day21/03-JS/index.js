let userName = "Bro Code";

console.log(userName.length);

let firstLetter = userName.charAt(0);
console.log(userName.charAt(1));

console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));

userName = userName.trim();

userName = userName.toUpperCase();
userName = userName.toLowerCase();

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","");

console.log(phoneNumber);