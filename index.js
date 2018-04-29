var express = require('express');
var app = express();
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
var HOST = 'localhost';
var MYSQL_USER = 'root';
var MYSQL_PASS = '';
var DATABASE = 'vendor';
var TABLE = 'register'; 

var mysql = mysql.createConnection({
host: HOST,
user: MYSQL_USER,
password: MYSQL_PASS,
});
app.get('/home',function(req,res,next){
res.sendfile('views/app.html');
});
app.post('/myaction', function(req, res) {
console.log('req.body');
console.log(req.body);
res.write('You sent the name "' + req.body.name+'".\n');
res.write('You sent the Email "' + req.body.email+'".\n');
res.write('You sent the City "' + req.body.city+'".\n');
res.write('You sent the Pincode "' + req.body.pincode+'".\n');
res.end()
});
app.listen(8181);
console.log('Example app listening at port:8181');