module.exports = {
    boardList : `SELECT b.no, b.title, b.writer, b.content, b.created_date, b.updated_date, COUNT(c.no)  as comment
                 FROM t_board_board b LEFT OUTER JOIN t_comment_board c
                                      ON b.no = c.bno                
                GROUP by b.no, b.title, b.writer, b.content, b.created_date, b.updated_date
                ORDER BY b.no`,
    boardInfo : `SELECT no, title, writer, content, created_date, updated_date, (SELECT COUNT(no) FROM t_comment_board WHERE bno = t_board_board.no) as comment
                FROM t_board_board
                WHERE no = ?`    , // ? 가 하나면 배열 아님 칼럼이 명시되어 있으면 단일값
    boardInsert : `INSERT INTO t_board_board SET ? `, // ? 여기는 객체 object 칼럼이 없어서 object형태로
    boardUpdate : `UPDATE t_board_board SET ? WHERE no = ? `, // ?가 두개 얘는 배열, 두개의 값이 필요해서
    commentList : `SELECT no, writer, content, created_date 
    FROM t_comment_board WHERE bno = ?`,
}

// boardList 에 LEFT OUTER JOIN쓴다  INNER 조인을 안쓰는 이유는 내용을 쓰지 않으면 누락된다

// 댓글수 는 count 함수를 쓴다
// bUpdate : `UPDATE t_board_board SET title = ? , writer = ? , content = ? WHERE no =?` // 여기서 물음표는 다 값이다 칼럼이 다 지정이 되어있으니까
// 배열을 객체로 변환하는 작업은 잘없다, 배열을 객체로
