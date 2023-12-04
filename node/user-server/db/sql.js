module.exports = {
    userList : 'SELECT * FROM T_USERS',
    userInfo : 'SELECT * FROM T_USERS WHERE user_id = ?',
    userInsert : 'INSERT INTO T_USERS SET ?',
    userUpdate : 'UPDATE T_USERS SET ? WHERE user_id = ?',
    userDelete : 'DELETE FROM T_USERS WHERE user_id = ?',
}