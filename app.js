var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

var listener = server.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
