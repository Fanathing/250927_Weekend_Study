const pool = require("../db.config");

const userCR = async({ user_id, user_pw, user_name }) => {
    const [result] = await pool.query(`INSERT INTO users(user_id, user_pw, user_name)
        values("${user_id}", "${user_pw}", "${user_name}");`);
        return result
}

module.exports = {
    userCR
}