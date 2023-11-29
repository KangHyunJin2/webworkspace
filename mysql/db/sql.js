//쿼리문 쓰는곳
//mysql 객체에 한해서 변환한다 set절을 채워줄 필드 기준으로
//물음표 하나에 객체 하나가 대응
module.exports = {   
    customerList : `SELECT * FROM customers`,
    customerInsert : 'INSERT INTO customers SET ?',
    customerUpdate : 'UPDATE customers SET ? WHERE id = ?',
    customerDelete : 'DELETE FROM customers WHERE id = ?',
    customerInfo : 'SELECT * FROM customers WHERE id = ?'
}