const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/signup.html", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.get("/login.html",function(req,res) {
    res.sendFile(__dirname + "/login.html");
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});