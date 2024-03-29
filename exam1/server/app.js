require("dotenv").config({ path: "./mysql/db.env" });
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(express.urlencoded({ extended : false })); //form


const server = app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

const db = require("./db.js");

// 전체
// header : header에 붙은 애들을 가져온다
// body : post, put 얘는 무조건 body써서 접근을한다
app.get("/boards", async (request, res) => {
  res.send(await db.connection("boardList"));
});

// 단건
app.get("/boards/:bno", async (request, res) => { // 경로에 콜론 :bno 는 변수명이다 이름 아무거나 해도 상관 x
  res.send((await db.connection("boardInfo", request.params.bno))[0]); // WHERE no = ? 가 request.params.bno 이다, params는 header에 있는 부분을 가져온다
});

// REST API 기준
//등록 post (rest 방식) body 속성으로 접근 > body.param 으로 접근
app.post("/boards", async (request, res) =>{
  let data = request.body.param;
  // let info = {  //필요한 값만 들고오고 싶을때
  //   title : data.title,
  //   writer : data.writer,
  //   content : data.content
  // }
  // let array = ['title', 'writer','content'];

  // for(let filed of array){
  //   info[filed] = data[filed];

  //   info.filed = data.filed; // 밑에랑 같은 의미이다
  //   info['filed'] = data['filed'] // 이 방식이 기본이다
  // }
  res.send((await db.connection("boardInsert", data)));

})

//수정 : put 얘도 body 속성으로 접근
app.put("/boards/:bno", async (request, res) =>{
  // sql 물음표가 2개라서 배열타입으로 첫번째는 객체 마지막은 칼럼이 있어서 단일값 두개 다른 타입 잘 보기
  let data = [request.body.param, request.params.bno]; 
  res.send((await db.connection("boardUpdate", data)));
})

//해당 게시글의 댓글 조회
app.get('/comments', async(request, res) =>{ // rest 방식 일때 불러오기 힘들다. 필요에 따라서 
  //querystring => ?key=value&key=value...
  let data = request.query.bno; // 우리가 넘겨줄 키값
  res.send((await db.connection("commentList", data)));
});