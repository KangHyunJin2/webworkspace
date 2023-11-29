//[구조 분해 할당] (Destructuring)
let obj = {
    id: 100,
    name: 'Hong',
    birth: '1999-12-25'
}

let {id ,name, age} = obj;  // 변수가 가진 값이 특정 객체에 있는 프로퍼티, 변수가 특정한 값을 가지도록 변수 선언 ,obj에 age 가 없어서 undefined 뜬다
console.log(id,name,age);


// module.export ={
//     object : {},
//     method : function(){}
// }
// let {object, method} = module;

let array = ['Hello', 'Nice', 'Monday']; 

let [x, y] = array; //x , y , z 는 내가 설정하는 이름 , 인덱스 순서로대로 값이 부여
console.log(x,y);

//중괄호
//대괄호는 배열의 값을 집어낸다