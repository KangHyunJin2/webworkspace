const process = require('process');
const os = require('os');

//console.log(process.env) //다 보고싶을때
console.log(process.env.JAVA_HOME); // env 기억하기 내가 가져 오고싶은 KEY값 을 이용해서 env.KEY 로 가져온다

console.log(os.cpus()); // CPU 코어 정보
console.log(os.tmpdir()); // 임시 저장 경로


