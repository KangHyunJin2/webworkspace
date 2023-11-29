const url = require('url');
let legercy = url.parse('httpS://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'); // 옛날 방식
console.log(legercy);

let whatwg = new URL('httpS://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'); //이 방식만 기억하면 될거다
console.log(whatwg);
// console.log(whatwg.searchParams);
console.log(whatwg.searchParams.get('query'));

//책 91page 그림 origin 구조 확인
