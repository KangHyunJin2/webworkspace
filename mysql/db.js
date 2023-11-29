//셀제 db와 연결하는 파일
const mysql = require('mysql'); //모듈 만들고
const sql = require('./db/sql.js'); //폴더 거치고

const pool = mysql.createPool({
    host : '127.0.0.1',
    port : 3306,
    user : 'dev',
    password : '1234',
    database : 'dev',
    connectionLimit : 10
});

//실제 실행 구문
// pool.query('sql문', '값', /*콜백함수*/(err, result) =>{
    // 기본
// });
const query = async(alias, values) =>{
    return new Promise((resolve, reject) =>{
        return pool.query(sql[alias], values, (err, results) =>{
            if(err){
                console.log(err);
                reject({err});
            } else {
                resolve(results);
            }
        })
    })
}