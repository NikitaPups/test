//09-
// let num =50


// while (num<55){
//     console.log(num);
//     num++
// }
// do {
//     console.log(num);
//     num++

// }
// while (num<55)

// for (let i=1; i<8; i++){
//     if (i==6){
//         continue
//     }
//     console.log(i)
// }

// let z=20;

// function showFirstMessage(text){
//     alert(text)
//     let z = 12
//     console.log(z);
// }
// showFirstMessage("helloWorld!");
// console.log(z);


// let calc =function (a,b){
//     return(a+b);
// }

let calc = (a,b) => a+b

console.log(calc(10,7));

function retVar(){
    let num =50;
    return num;
}
let anotherNum=retVar();
console.log(anotherNum);
 
let str = "Pussy";
console.log(str.length);

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

let twelve="12.21px";
// console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));