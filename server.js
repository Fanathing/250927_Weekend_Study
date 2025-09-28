const express = require("express");
const app = express();
const path = require("path")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/boards/index.html"))
})

app.listen(3000, () => {
    console.log("시간은,,움직이기 시작한다");
})