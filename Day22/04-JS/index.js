
document.getElementById("myButton").onclick = function()
{
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");



    if(myCheckBox.checked == true)
    {
        console.log("You are subsribed!")
    }
    else
    {
        console.log("You are not subsribed!")
    }

    if(visaBtn.checked)
    {
        console.log("You are paying with a Visa!");
    }
    else if(mastercardBtn.checked)
    {
        console.log("You are paying with a Mastercard!");
    }
    else if(paypalBtn.checked)
    {
        console.log("None of the buttons selected!");
    }
}