const timeout = setTimeout(() =>{
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDay()).slice(-2);

    console.log(`${year}년${month}월${day}일`);
}, 1000);

let count = 0;
const interval = setInterval(() =>{
    console.log('interval %d' , count++);
    if(count == 5){
        clearInterval(interval);
    }
}, 1000);

const immediate = setImmediate(()=>{ //쓸때 주의 immediate 의미는 즉각적으로 실행 이라고 하지만 실제로는 함수 호출뒤에 오는 모든 코드가 먼저 실해오딘 후 바로 다음에 실행
    console.log('즉시 실행 요청');
})

console.log('마지막 코드');