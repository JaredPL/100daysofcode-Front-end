
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");
let symbol = window.prompt("Enter symbol");


for(let i=0; i<=rows; i++)
{
    for(let j=0; j<=columns; j++)
    {
        document.getElementById("myRecentangle").innerHTML += symbol;
    }

    document.getElementById("myRecentangle").innerHTML += "<br>"
}