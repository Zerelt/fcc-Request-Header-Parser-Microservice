//grab packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
    
//routes will go here
app.get('/',function(req,res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var lang = req.headers['accept-language'].split(',')[0];
    var soft = req.headers['user-agent'].split(/[\(,\)]+/)[1];//pass regex with multiple separators into JS split operator
    var  result = {ipaddress: ip, language:lang, software:soft};
    
    res.json(result);//used .json() to get the monospace font without making a css file
});

//start server
app.listen(port);