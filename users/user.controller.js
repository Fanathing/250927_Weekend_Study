const userRepository = require("./user.repository.js");
const path = require("path");

const getJoin = (req,res) => {
    res.sendFile(path.join(__dirname, "../views/users/join.html"));
}

const postJoin = async(req, res) => {
    try {
        await userRepository.userCR(req.body);
        res.redirect("/");
    } catch (error) {
        res.status(404).send("회원가입중 오류가 발생 했습니다.");
    }
}

module.exports = {
    getJoin,
    postJoin
}