var express = require('express');
var app = express();

//get route
app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('Server is running on port '+port);
})