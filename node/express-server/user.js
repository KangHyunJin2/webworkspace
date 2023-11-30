const express = require('express');
const router = express.Router();

//라우터 등록
router.get('/', (req, res) =>{
    res.send('회원 정보 조회');
});

router.post('/insert', (req, res) =>{
    res.send('회원 등록');
});

router.put('/update', (req, res) =>{
    res.send('회원 정보 수정');
});

router.delete('/delete', (req, res) =>{
    res.send('회원 삭제');
});
// 진짜 줜나힘들다



module.exports = router; // 등록한 라우터 정보를 모듈 형태로 반환 router 자체가 // 이 뒤에 코드가 오면 안된다