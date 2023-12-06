//서버
require('dotenv').config({ path : './db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.use(express.static('dist'));

app.listen(3000, () =>{
    console.log('서버 시작합니당');
})

app.get('/', (req,res) =>{
    res.sendFile('/dist/index.html');
})

//전체 조회
app.get('/api/users', async(req,res) =>{
    let list = await mysql.query('userList');
    res.send(list);
})

//단건 조회
app.get('/api/users/:userNo', async(req,res)=>{
    let data = req.params.userNo;
    let listInfo = await mysql.query('userInfo', data);
    res.send(listInfo[0]);
})

//추가
app.post('/api/users', async(req,res)=>{
    let data = req.body.param;
    let result = await mysql.query('userInsert', data)
    res.send(result);
});

//수정
app.put('/api/users/:userNo', async(req,res) =>{
    let data = [req.body.param, req.params.userNo];
    let result = await mysql.query('userUpdate', data);
    res.send(result);
});

//삭제
app.delete('/api/users/:userNo', async(req,res)=>{
    let data = req.params.userNo
    let result = await mysql.query('userDelete', data);
    res.send(result);
});