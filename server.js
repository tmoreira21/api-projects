var express = require('express');
var app = express();
var mnth = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function naturalDate(tm){
	var d = new Date((tm*1000));
	return mnth[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function unixTime(tm){
	var d = new Date(tm);
	return (d.getTime()/1000);
}


app.get('/:key', function(req, res) {
	
	var unix = "";
	var natural = "";
	
	if(isNaN(req.params.key)){
		unix = Number(unixTime(req.params.key));
		natural = req.params.key;
	}else{
		unix = Number(req.params.key);
		natural = naturalDate(req.params.key);
	}
	var obj = { "unix": unix, "natural": natural };
	
	res.send(obj);
});

app.listen(8080,function(){
	console.log("Listening on port 8080");
});