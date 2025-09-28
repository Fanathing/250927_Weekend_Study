const express = require("express");
const router = express.Router();
const boardController = require("./board.controller.js");

router.get("/list", boardController.getList);
router.post("/list", boardController.postList);

module.exports = router;