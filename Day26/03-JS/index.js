
const x = 11;

const color = x > 10 ? 'red' : 'blue';

console.log(color);

switch(color)
{
    case 'red':
        console.log('color is red');
    break;
    case 'blue':
        console.log('blue');
    break;
    default:
        console.log('Color is not red or blue');
    break;      
}