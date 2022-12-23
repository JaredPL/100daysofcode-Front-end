

let adult = checkAge(21);

console.log(adult);

function checkAgee(age)
{
  if(age >= 18)
    return true;
  else
    return false;
}

function checkAge(age)
{
  return age >= 18 ? true : false;
}

checkWinner(false);

function checkWinner(win)
{
  win ? console.log("YOU WIN!") : console.log("YOU LOSE!"); 
}