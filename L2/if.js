// let a=6;
// let b=3;



// if (a+b==8){
//     console.log("right!")
// }
// else {
//     console.log("wrong!")
// }   
let num = 50;

// if (num<49){
//     console.log("Wrong!")
// }
// else if(num>100){
//     console.log("To much")
// }
// else {   
//     console.log("Right!")
// }

// (num ==50) ? console.log("Right!") : console.log("Wrong!");


switch(num){
    case num <=49 : 
        console.log("Wrong!");
        break;
    case num >=100:
        console.log("To much!");
        break;
    case   50:
        console.log("Right!");
        break;
    default:
        console.log("Something goes wrong!");
        break;
}