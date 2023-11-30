module.exports = {
    userList : 'SELECT * FROM T_USERS',
    userInfo : 'SELECT * FROM T_USERS WHERE user_no = ?',
    userInsert : 'INSERT INTO T_USERS SET ?',
    userUpdate : 'UPDATE T_USERS SET ? WHERE user_no = ?',
    userDelete : 'DELETE FROM T_USERS WHERE user_no = ?',
}