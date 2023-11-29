const defaultNum = 1;

function add(num1 , num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multi(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

module.exports={  //exports느 객체를 요구함, 무조건 객체여야함
    defaultNum,
    add,
    minus,
    multi,
    divide   //divide : divide 라는 뜻 동일한 이름일 때에 이렇게 많이 씀
}

// module export default 는 서로 공존할수 없다
// export default{
//     //import로
// }