// 서버가 되는곳
//dotenv는 변수를 사용하지 않는다
require('dotenv').config({ path : './db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js'); // 모듈

//미들웨어 등록 //데이터 용량 제한하는
app.use(express.json({ // 모듈을 설정하지않고 자체적으로 불러온것 제인슨파스랑 같음
    limit : '50mb'          // 익스프레스가 가지고있는 json()
}));

app.listen(3000, ()=>{
    console.log('서버 시작합니당');
});


// 전체 조회
app.get('/customers', async(req,res)=>{
    let list = await mysql.query('customerList'); // mysql은 exports한 query객체 반환 query는 const query = async (alias, values) 함수를 불러온것
    res.send(list);
});

//npm install --save-dev nodemon
//단건 조회
app.get('/customers/:id', async(req,res)=>{
    let data = req.params.id; //경로에 붙었기 때문에 body 로 넘어오지 않음
    let listInfo = await mysql.query('customerInfo', data);
    res.send(listInfo[0]); //select는 한건이든 여러건이든 배열로 넘어옴, 단건했을때 배열로넘어오면 문제가 될수도 있음 info[0] 이런식으로 제한
});

//post 랑 put 은 body에 접근해야한다
//추가
app.post('/customers', async(req, res)=>{  //body안에 데이터가 적혀져서 오니까 바디로 접근
    let data = req.body.param; //body객체 안에 파람이라는 필드 값 //객체형태면 됨 //
    console.log(data)
    let result = await mysql.query('customerInsert', data);
    res.send(result);
});

//수정
app.put('/customers/:id', async(req,res) =>{
    let datas = [ req.body.param, req.params.id ]; // 물음표 별로 데이터가 필요, 물음표로 데이터가 하나 필요해서 배열로
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
});

//삭제
app.delete('/customers/:id', async(req,res) =>{ //하나밖에 없으니까 배열아님 body 객체도 필요없음
    let data = req.params.id;
    let result = await mysql.query('customerDelete', data);
    res.send(result);
}); 