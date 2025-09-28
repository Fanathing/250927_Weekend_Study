const boardRepository = require("./board.repository.js");
const path = require("path");

const getBoards = async(req, res) => {
    try {
        const boards = await boardRepository.findAll();
        res.render("boards/list.html",{
            boards
        })
    } catch (error) {
        res.status(404).send("게시판 진입 오류");
    };
};

const postUserInfor = async(req, res) => {
    try {
        const users = await boardRepository.findUser(req.body);

        if(users.length === 0) {
            return res.status(404).send("아이디 또는 비밀번호가 틀렸습니다.");
        }
        
        res.redirect("/boards");

    } catch (error) {
        res.status(404).send("로그인 오류");
    };
};

const getCreate = async(req, res) => {
    res.sendFile(path.join(__dirname, "../views/boards/create.html"));
};

const postCreate = async(req, res) => {
    try {
        const { insertId } = await boardRepository.create(req.body);
        res.redirect(`/boards/view/${insertId}`);
    } catch (error) {
        res.status(404).send("글 작성에 실패하였습니다.");
    };
};

const getView = async(req, res) => {
    try {
        const [board] = await boardRepository.findOne(req.params.id);
        res.render("boards/view.html", {
            board
        })
    } catch (error) {
        res.status(404).send("게시글을 불러올 수 없습니다.");
    };
};

const getDelete = async(req, res) => {
    try {
        await boardRepository.deleteData(req.params.id);
        res.redirect("/boards");
    } catch (error) {
        res.status(404).send("삭제에 실패했습니다!");
    };
};

const getUpdate = async(req, res) => {
    try {
        const [board] = await boardRepository.findOne(req.params.id);
        res.render("boards/update.html", {
            board
        });
    } catch (error) {
        res.status(404).send("수정 페이지를 불러오지 못했습니다!");
    };
};

const postUpdate = async(req, res) => {
    try {
        await boardRepository.updateData(req.params.id, req.body);
        res.redirect(`/boards/view/${req.params.id}`);
    } catch (error) {
        res.status(404).send("수정에 실패하였습니다!");
    };
};

module.exports = {
    getBoards,
    postUserInfor,
    getCreate,
    postCreate,
    getView,
    getDelete,
    getUpdate,
    postUpdate
}