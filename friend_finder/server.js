var express =require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 3000;

// creates application /json parser
var jsonParser = bodyParser.json()

//create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Parse various different customer json types as json
app.use(bodyParser.json({ type: 'applicatoin/**json'}))

// Parse some things int a buffer 
app.use(bodyParser.raw({ type: 'application/vdn.customer-type'}))

// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))


app.get('/survey', function(req, res){
    res.sendfile(path.join(__dirname + '/../public/survey.html'));
});

app.use(function(req, res) {
    res.sendfile(path.join(__dirname + '/../public/home.html'));
});
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);

})

