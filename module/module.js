//import OR require() 2가지 방식이 있다

// 작성하기 전에 require 는 보통 위에다 바로 선언한다

//같은 레벨의 파일 불러올때 './'
//상위 레벨은 '../'

//const cal = require('./calculator'); // 통째로 받는것
const {add, minus} = require('./calculator'); //특정 대상을 불러옴 요즘은 이렇게 많이 쓴다고함

console.log(add(10,25));
console.log(minus(25,3));
