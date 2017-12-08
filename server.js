var express = require("express");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
app.use(session({secret: 'codingdojorocks'})); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    if(!req.session.formData){
        req.session.formData = {};
    }
    res.render('index');
});

app.post('/process', function (req, res){
    req.session.formData=req.body;
    console.log(req.session.formData);
    res.redirect('/result');
});
app.get('/result', function (req, res){
    var data = req.session.formData;
    res.render('result', { data: data });
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})