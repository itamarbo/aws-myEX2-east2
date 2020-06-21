var port = process.env.PORT || 8080;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello my get World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello my post World!"
  });
});

app.listen(port);
module.exports = app;
