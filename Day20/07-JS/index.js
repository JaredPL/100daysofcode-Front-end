
let a;
let b;
/*
a = window.prompt("Enter a");
b = window.prompt("Enter b");
*/
let c;

//c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));


document.getElementById("subbmit").onclick = function()
{
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);


    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("c label").innerHTML = "Side C: " + c;
}
