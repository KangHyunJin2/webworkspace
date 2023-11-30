const fs = require('fs'); //경로 표시가 없고 이름 형태로 사용하면 내장되어 있는 것 중 하나를 꺼냄
const { Console } = require('console'); //Console 클래스 대문자 별도의 파일을 만들고 싶으면 쓴다

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout : output, stderr : errorOutput });
const count = 5;
logger.log('count : %d' , count);
logger.error('count : ' + count);

//console.log 를 보는 능력을 길러라'