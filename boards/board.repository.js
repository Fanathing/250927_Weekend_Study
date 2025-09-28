const pool = require("../db.config.js");

const findAll = async() => {
    const [result] = await pool.query("SELECT * FROM boards;");
    return result
}

const findUser = async({ user_id, user_pw }) => {
    const [result] = await pool.query(`SELECT * FROM users WHERE user_id="${user_id}" AND user_pw="${user_pw}";`);
    return result
}

const create = async({user_id, writer, title, content }) => {
    const [result] = await pool.query(`INSERT INTO boards(user_id, writer, title, content) values("${user_id}", "${writer}", "${title}", "${content}");`);
    return result
}

module.exports = {
    findAll,
    findUser,
    create
}

