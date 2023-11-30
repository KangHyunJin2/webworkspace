let array = [1, 2, 3];
let string = "Hello";
// [1, 2, 3 ,"H" , "e", "l" ,"l","o"]
let newArray = [array, ...string];
// let newArray = [];
// for(let value of array){
//     newArray.push(value);
// }
// for(let value of String){
//     newArray.push(value);
// }
console.log(newArray);