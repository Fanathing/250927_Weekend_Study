const express = require("express");
const router = express.Router();
const boardController = require("./board.controller.js");

router.get("/", boardController.getBoards);
router.post("/", boardController.postBoards);
//생성 페이지
router.get("/create", boardController.getCreate);
// 생성 페이지에서 post
router.post("/create", boardController.postCreate);
//상세 페이지
router.get("/view/:id", boardController.getView);

//삭제버튼
// router.get("/delete:id", boardController.getDelete);

//수정페이지
// router.get("/update:id", boardController.getupdate);


module.exports = router;