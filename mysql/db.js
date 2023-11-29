//셀제 db와 연결하는 파일
const mysql = require('mysql'); //모듈 만들고
const sql = require('./db/sql.js'); //폴더 거치고

const pool = mysql.createPool({ //mysql.env 암호화
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT
});

//실제 실행 구문
// pool.query('sql문', '값', /*콜백함수*/(err, result) =>{
    // 기본
// });

//[alias] 대괄호 쓰는 이유 : 필드명을 내가 주는대로 넘겨준다는 뜻
//
const query = async(alias, values) =>{
    return new Promise((resolve, reject) =>{
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