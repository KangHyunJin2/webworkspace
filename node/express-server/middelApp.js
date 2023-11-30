const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// application/www-form-urlencoded >> 기본 컨텐트 타입
const defaultParser = express.urlencoded({extended : false});
// application/json
const jsonParser = express.json(); // 바디가 가지고있는 text  데이터를 변환해주는 역할

// 미들웨어를 use 메서드로 등록 >> 해당 서버가 가지고있는 모드 라우팅에 대해 동일하게 적용됨
app.use(defaultParser); //전체 경로에 적용
app.post('/info' , (req, res) =>{
    res.send('welcome,' + req.body.name); //body의 값을 가져와서 출력
});

//라우터별로 등록 // 중간에 원하는 미들웨어(jsonParse)를 넣을수 있음 경로로 들어와서 핸들러가 동작하기전에 미들웨어가 동작함
app.post('/message', jsonParser, (req, res) =>{
    res.send('MSG, ' + req.body.message); //post이기때문에 바디에서 값을 가져오게됨
});

app.listen(5000, () =>{
    console.log('server start!');
});
// npm install express-session 설치

let sessionSettiong = session({
    secret : 'secret key',      //얘는 필수로 값을 줘야함 : 의미 없는 값을 줘도 괜찮음
    resave : false,             //새로 저장하는 부분에서 변경사항이 없어도 다시 저장할건지 말건지를 설정 // 불필요하게 업데이트를 진핼할필요없으니까
    saveUninitialized : true,
    cookie : {                  //자바스크립트에서 해당 쿠키 접근못하게
        httpOnly : true,        // true 면 https에서만 왓다갓다 할수있게 보안
        secure : false,         // 쿠키 유지기간
        maxAge : 60000
    }
});

// 만들어진 세션 정보를 use 로 넣음
app.use(sessionSettiong);
//npm install cors 설치

const corsOptions = {                       // 서버측에서 CORS를 허용해야함
    origin : 'http://192.168.0.43:5500',    // 허용할 도메인 설정 니가만든 페이지는 아니지만 응답해야한다 라고 서버에 알려줌
    optionsSuccessStatus : 200
}

//등록
app.use(cors(corsOptions));
//요청들어오면 세션자체는 자동생성

app.get('/', (req, res) =>{
    res.send(req.session); //요청을 하면서 req가져오고 req가 가지고있는 세션 정보가 출력이 되어야하기때문에 이렇게 작성
});

//세션에 로그인 정보 저장
app.post('/login', (req, res) =>{
    const { id , pwd} = req.body;
    req.session.user = id;              //req.session.id 라고 쓰면 X
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');              //정상 작동하면 메인으로 넘어가도록 처리
    })
})

//세션 로그아웃
app.get('/logout' , (req, res) =>{
    req.session.destroy();
    req.redirect('/');
})