/**
 * Created by YEFY on 2017/8/26.
 */
module.exports = {
    insert:'INSERT INTO users(username,password,email,level) values(?,?,?,?)',
    getUserByUsername:'SELECT * FROM users WHERE USERNAME=?'
};