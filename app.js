const express = require("express");
const bodyParser = require("body-parser");
const db = require("./mongoose");
const form = require("./model/form ");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index1.html");
});

app.get("/signup.html", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.get("/login.html",function(req,res) {
    res.sendFile(__dirname + "/login.html");
});
app.post("/user/signup",function(req,res){
    console.log(req.body);
    form.create({
        Username:req.body.email,
        Password:req.body.pass,
    },(err,taskCreated)=>{
        if(err){
            console.log(err);
            return;
        }
    });
    res.redirect("/login.html")
});
app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
