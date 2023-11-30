let nums = [50, 15, 39, 555 , 6 , 804];

let total = nums.reduce((sum, num)=>{ //num 이 []값을 순차적으로 가져옴
    return sum + num;
}, -1000); //초기값 설정가능

console.log(total);