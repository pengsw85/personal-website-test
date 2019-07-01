const express = require("express");

const app = express();

app.use(express.static("public"));

app.route("/")
    .get((req, res) => {
        res.sendFile(__dirname + "/index.html")
    })


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, (req, res) => {
    console.log("listening on port " + port)
})