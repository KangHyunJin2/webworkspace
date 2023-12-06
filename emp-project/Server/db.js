//db와연결
//require('dotenv').config({ path : './db/mysql.env' }) //환경변수에등록하는역할? 환경변수는 process.env -> app.js로 이동
const mysql = require('mysql'); 
const sql = require('./db/sql.js'); 

const dbPool = mysql.createPool({
    host: process.env.MYSQL_HOST, 
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB, 
    connectionLimit: process.env.MYSQL_LIMIT 
})

const query = async (table, dml, params ) => {
    return new Promise((resolve, reject) => {
        dbPool.query(sql[table][dml], params, (error, rows) => { 
            if (error) {
                console.log(error);
                reject({
                    error
                }); //reject에 err를 전달
            } else {
                resolve(rows);
            }
        })
    })
}
// const getData = async () => {
//     console.log(await query('customerList'));
// };

// getData();

module.exports = {
    query
}