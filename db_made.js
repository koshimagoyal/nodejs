var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
	con.query("create database vendor",function (err,result){
		if(err) throw err;
		console.log("created");
	});
});