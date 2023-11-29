const fs = require('fs'); //fs 데이터 모듈 받고
const express = require('express'); // experss 데이터 모듈받고
const userRouter = require('./user.js');
const app = express(); // 객체를 생성하고

app.use('/user', userRouter); //메서드 기반을해서 라우터 등록
app.use('/public', express.static('./images'))
app.use(function (err, req, res, next) {
    res.status(500).json({statusCode: res.statusCode,
                          errMessage : err.message});
});

app.get('/error', (req , res , next)=>{
    next(new Error('Process Fail! Check Data!'));
});

const jsonFile = fs.readFileSync('db.json','utf8'); //리드 파일 동기 방식에 파일을 읽어들이는 함수 호출
const jsonData = JSON.parse(jsonFile); // 읽고 json 데이터 parse 변환

//일종의 select문의 역할을한다
const getData = (target, where) =>{ //target : Key, where : 배열인 posts, commands 안에 해당하는 아이디 값
    let data = jsonData[target];
    if(Array.isArray(data)){ //proFile 때문에 이 if 문이 있다
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data = obj;
            }
        }
    }
    return data;
}

// const getData = async() => {
//     return await fetch('db.json')
//     .then(res => res.json())
    
// }

// let db = getData();

// app.get('/posts' , (req, res) => {
//     res.send(jsonData['posts']); //
// });

//라우팅 등록
app.get('/', (req, res) => {
    res.send('Server Connect');
});

//posts전체조회
app.get('/posts', (req, res) =>{
    let data = getData('posts');
    res.json(data);
});

//조건이 같이오는 경우
//posts 단건조회
app.get('/posts/:id', (req, res) =>{ // : 값이 붙어서 넘어온다
    let data =  getData('posts', req.params.id); // body 외에 경로에서 가져올때 params
    res.send(data);
});

//comments 전체
app.get('/comments', (req, res) =>{
    let data = getData('comments');
    res.send(data);
});

//comments 단건
app.get('/comments/:id', (req, res) =>{
    let data = getData('comments', req.params.id);
    res.send(data);
})

// profile 조회
app.get('/profile', (req, res)=>{
    let data = getData('profile');
    res.send(data);
})

//동일한 경로라 해도 메서드가 다르면 메서드 다르게 인식
//개별적으로 처리 할수있다
app.route('/emps')
.get((req, res)=>{
    res.send('사원 전체조회');
})
.post((req, res)=>{
    res.send('사원 등록');
})
.put((req, res)=>{
    res.send('사원 수정');
})
.delete((req, res)=>{
    res.send('사원 삭제');
})

// 리스닝상태 서버를 키기위해 아이피 포트 바인드 시키고 나머지를 리스닝 상태로만듬 클라리언트 접속 연결을 받아들일 준비
//서버를 동작시키는 부분 입니당
app.listen(3000, () => {
   console.log('서버가 실행');
   console.log('http://localhost:3000');
});