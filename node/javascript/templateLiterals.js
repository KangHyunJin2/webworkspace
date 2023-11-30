let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dat = date.getDay();

// [``]백픽 는 줄바꿈을 허용 자동으로 줄바꿈도 표시가 가능
let msg = `${year}년
${month}월
${dat}일`;

console.log(msg);