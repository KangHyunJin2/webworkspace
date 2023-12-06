require('dotenv').config({ path : './db/mysql.env' })

const express = require('express');
const app = express();
const mysql = require('./db.js'); //db.js를반환시켜서

app.use(express.json({ //용량 제한
    limit : '50mb'
}));

app.listen(3000, ()=>{ //listen => 서버 실행시키는 메소드
    console.log('Server Start!, http://localhost:3000')
});

//여기까지 서버 기본 세팅임

app.get('/emps', async(req, res) => {
    let list = await mysql.query('emp','list');
    res.send(list); //목록조회
});

//단건조회
app.get('/emps/:emp_no', async (req, res) => {
    let data = req.params.emp_no; //경로라서 body에 붙지않는다???
    let list = await mysql.query('emp','info', data);//result대신list쓰는이유?
    res.send(list[0]); //select문은 한건이든 여러건이든 배열로 들어온다
});

const empTable = ['emp_no','first_name','last_name','gender','hire_date'];

const deptEmpTable=['emp_no','dept_no','from_date','to_date']; //이거랑 set=?절 순서 같아야함 객체는 순서 별 상관없는데..

const salariesTable=['emp_no','salary','from_date','to_date'];

//등록
app.post('/emps', async (req, res) => {
    let empInfo = req.body.param;

    let empData = {};
    //for 문이 지금 자바스크립트이기때문에 가능함
    for(let column of empTable){         // let column = 'emp_no'
        let value = empInfo[column];     // let value = empInfo['emp_no']
        if(value == '') continue;        //공백이 있으면 생략해서 보냄
        empData[column]= value;          //empData['emp_no']
        //사용자가 보내준 상자안에서 내가 필요한것만 꺼내서 다른바구니에 옮기는작업 이때 새로운바구니에들어가야하는 목록을배열로담고있따
    }
    result = await mysql.query('emp','insert',empData)

    let deptEmpData = [];
    for(let column of deptEmpTable){
        let value = empInfo[column]; 
        if(value == '') continue; 
        deptEmpData.push(value); //set절에 어느칼럼 업데이트할건지 명시되어있어서 배열이다 set절 이라고 무조건 객체는 아니다
    }
    result = await mysql.query('deptEmp','insert',deptEmpData)

    let salData = {};
    for(let column of salariesTable){
        let value = empInfo[column]; 
        if(value == '') continue; 
        salData[column]= value;
    }
    salData.to_date='9999-01-01'; //고정값에 대해 변수에 담아두는것...쿼리문에 9999-01-01로 하겠다 안적어놔서 여기 담아줘야함

    result = await mysql.query('sal','insert',salData);
    res.send(result); // 결과를 돌려주면서 통신을 종료해줌 보낼게 없으면 종료라도 해야함res.end()로
});

// 수정
app.put('/emps/:emp_no', async(req,res)=>{
    let data = [req.body.param, req.params.emp_no]
    let result = await mysql.query('emp', 'update', data);
    res.send(result);
});

app.delete('/emps/:emp_no', async(req,res)=>{ 
    //delete 실행하는 쿼리문이 중요한게 아니고 화면 입장에서는 삭제한다고 보기 때문에, 화면에서 진행하는 기능과 실제 db에서 하는 기능에는 차이가 있을수 있다
    //put, post 는 body 허용
    //delete 는 기본적으로 body가 없다
    // express와 같이 몇가지는 body 허용을 지원하고 있다

    // 1 방식 사용자가 퇴사날짜를 저장하는 방식 -> body 필요
    // 2 방식 오늘 날짜로 강제 처리하는 방식
    // 물음표가 1개가 아니고 2개(2개 이상이면 무조건 배열로)여서 배열임
    // object인지 아닌지 : 하나의 물음표를 봤을 때 커럶이 명시되어있는지 봐야함
    // object는 컬럼이 명확하지 않아서, 두번째는 명확해서 그냥 값
    // 따라서 지금 delete는 쿼리문을 봤을 때 지정되어있기 때문에 그냥 값
    let data = [req.body.param.to_date, req.params.emp_no]
    console.log(data);
    let result = await mysql.query('deptEmp', 'update', data);
    res.send(result);
});

// //수정
// app.put('/emps/:emp_no',async (req,res)=>{
//     let datas = [req.body.param, req.params.emp_no];
//     let result = await mysql.query('emp','update',datas);
//     res.send(result);
// });

// //삭제
// app.delete('/emps/:emp_no',async (req,res)=>{
//     let data = req.params.emp_no;
//     let result = await mysql.query('emp','delete',data);
//     res.send(result);
// });
