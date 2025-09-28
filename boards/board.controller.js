const boardRepository = require("./board.repository.js");
const path = require("path");

const getList = async(req, res) => {
    try {
        const boards = await boardRepository.findAll();
        res.render("boards/list.html",{
            boards
        })
    } catch (error) {
        res.status(404).send("게시판 진입 오류");
    }
}

const postList = async(req, res) => {
    try {
        const users = await boardRepository.findUser(req.body);

        if(users.length === 0) {
            return res.status(404).send("아이디 또는 비밀번호가 틀렸습니다.");
        }
        
        res.redirect("/boards/list");

    } catch (error) {
        res.status(404).send("로그인 오류");
    }
}

module.exports = {
    getList,
    postList
}