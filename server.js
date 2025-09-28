const express = require("express");
const app = express();
const path = require("path")
const nunjucks = require("nunjucks");
const boardRouter = require("./boards/board.router.js");
const UserRouter = require("./users/user.router.js");

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "html");
nunjucks.configure("views", {express: app});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/boards/index.html"))
})

app.use("/join", UserRouter);
app.use("/boards", boardRouter);

app.listen(3000, () => {
    console.log("시간은,,움직이기 시작한다");
})