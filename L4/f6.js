// let options = {
//     width: 1024,
//     hight: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool=false;
// options.colors={
//     border : "black",
//     bg:"red"
// };

// delete options.bool;

// console.log(options);

// for(let key in options){
//     console.log('Свойство '+ key+ ' имеет зачение '+ options[key])
// }

// console.log(Object.keys(options).length);

// let arr=["first",2,3,"four",5]

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("3");

// arr[99] =99

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i+': '+item+' (массив: '+ mass+')');
// });

// console.log(arr)

// let mass= [3,4,5,6,7];

// for (let key of mass){
//     console.log(key);
// }

// for (let key in mass){
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr=[];
// arr=ans.split(',');

// console.log(arr)

// let arr = ["asd","dasd","qewr"],
//     i=arr.join(', ');
// console.log(i)

let arr = [1,15,4],
    i=arr.sort(compareNum);
function compareNum(a,b){
    return a-b;
}
console.log(arr);