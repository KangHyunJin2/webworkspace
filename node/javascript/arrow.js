//[함수선언식] - 선언만 되어있으면 어디든지 쓸수있음 (위에배치)
function hello(name) {
    return "Hello, " + name;
}

//[화살표함수] -간단한 코드나 익명함수일때 화살표함수를 많이 쓴다
let arrHello = (name)=>{return "Hello, " + name;} //기본 베이스
arrHello = name => "Hello , " + name; //실행되는 리턴코드 가 하나라면 중괄호도 생략가능

//[함수표현식] 요즘에 많이씀 이유는  - 해당함수가 사용되기전에 선언이 되어야 한다 (밑에배치)
const message = function (msg) {
    return "msg : " + msg;
}

//[화살표함수] -화살표함수 사용할때 this 를 사용하지 않아야한다 이유는 기본적인 윈도우가 끌려오기때문에
let arrMessage = (msg) => {return "msg : " + msg;}
arrMessage = msg => "msg :" + msg;
arrMessage = () => {  //실행된는 코드가 2개 이상일때는 무조건 중괄호가 있어야한다
                    let today = new Date().getDay();
                    console.log("오늘 날짜", today);
                    };

// function hello(msg){
//     return "msg, Hello : " + msg;
// }

// console.log(hello("world"));