const express = require("express");
const UserRouter = express.Router();
const userController = require("./user.controller.js");


UserRouter.get("/", userController.getJoin);
UserRouter.post("/", userController.postJoin);

module.exports = UserRouter;