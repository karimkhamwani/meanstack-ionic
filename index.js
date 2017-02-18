var express = require('express')
var bodyParser = require("body-parser");
var http = require('http');

var app = module.exports.app = express();
var server = http.createServer(app);

app.use(bodyParser.json({limit:"50mb"})); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',express.static(__dirname + '/www'));


server.listen(process.env.PORT || 8100);

app.get('/user',function(req,res){
	console.log("in server")
	res.send("wah yaar")
})

module.exports = app
