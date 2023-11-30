//셀제 db와 연결하는 파일
const mysql = require('mysql'); //모듈 만들고
const sql = require('./db/sql.js'); //폴더 거치고

//트랜잭션이 발생하는 와중에는 디비 접근 불가
//커밋, 롤백으로 끊어줘야함
//커넥션 : 프로그램=db사이의 길 커넥션이 생겨서 sql 을 보내면 그제서야 트랜잭션이 발생
// 커넥션이 더큰 개념 커넥션은 sql문 보내기전에 미리 길을 생성해 놓는것

const pool = mysql.createPool({ //mysql.env 암호화
    host : process.env.MYSQL_HOST,    //환경변수에 등록이 되는것
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT  //최대몇개의 길 너무 많이 잡아버리면 다른사이트에서 db 접근 못하게됨
});

//실제 실행 구문
// pool.query('sql문', '값', /*콜백함수*/(err, result) =>{
    // 기본
// });

//[alias] 대괄호 쓰는 이유 : 필드명을 내가 주는대로 넘겨준다는 뜻
const query = async(alias, values) =>{
    return new Promise((resolve, reject) =>{   //프로미스의 resject resolve가 바깥에서 처리되는 것이 아니라 pool.query 안에서 result resolve가 처리됨
        pool.query(sql[alias], values, (err, results) =>{
            if(err){
                console.log(err);
                reject({err});
            } else {
                resolve(results);
            }
        })
    })
}

// 데이터 접속이 잘 되는지 검사
// const getData = async() =>{
//     console.log(await query('customerList'));
// };

// getData();

module.exports = { 
   query
}