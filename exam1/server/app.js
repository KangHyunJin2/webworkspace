require("dotenv").config({ path: "./mysql/db.env" });
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

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
  res.send((await db.connection("boardInsert", data)));

})

//수정 : put 얘도 body 속성으로 접근
app.put("/boards/:bno", async (request, res) =>{
  // sql 물음표가 2개라서 배열타입으로 첫번째는 객체 마지막은 칼럼이 있어서 단일값 두개 다른 타입 잘 보기
  let data = [request.body.param, request.params.bno]; 
  res.send((await db.connection("boardUpdate", data)));
})
