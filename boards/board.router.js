const express = require("express");
const router = express.Router();
const boardController = require("./board.controller.js");

router.get("/", boardController.getBoards);
router.post("/", boardController.postBoards);
//생성 페이지
router.get("/create", boardController.getCreate);
// 생성 페이지에서 post
router.post("/create", boardController.postCreate);


module.exports = router;