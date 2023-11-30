const multer = require('multer');  //멀티 가져오기
const path = require('path');       //path 가져오기

const express = require('express'); //express 가져오기
const app = express();
//npm install multer 설치

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads/'); //express server 내에 uploads 폴더 생성해야함
    },
    filename : function(req, file , cb){        //사용자가 입력한 파일이름은 중복 가능성이 있어서 유니크한 값을 주기 위함
        cb(null, new Date().valueOf() + path.basename(file.originalname));  //file.originalname (사용자가 업로드한 파일이름)
    }
});

const upload = multer({ storage : storage });   //multer 인스턴스
//limit 제한걸어서 사용자가 업로드하는 데이터의 형태와 크기를 제한
//xonst upload = multer({ dest: 'uploads/', limit {fileSize: 5 * 1024 * 1024}});

app.post('/profile' , upload.single('avatar'),(req,res) =>{ // 단일처리 //avatar 어떤 이름으로 받을지 정해줘야함
    console.log(req.file);      //단건
    console.log(req.body);      //미들웨어가 중간에서 돌면서 file / body 로 나뉘게됨
});

app.post('/photos', upload.array('photos', 12), (req,res)=>{ //'postos' , 12이름과 퇴대 갯수를 제한
    for(let file of req.files){                 //여러건
        console.log(file);
    }
});

app.listen(5000, () =>{
    console.log('Server Start!');
});