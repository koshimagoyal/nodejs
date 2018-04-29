var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "vendor"
});

con.connect(function(err){
	if(err) throw err;
	console.log("connected");
	con.query("create table register (name varchar(50),email varchar(50),address varchar(50),password varchar(50))",function(err,result){
	if(err) throw err;
	console.log("created");
	});
});