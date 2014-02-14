var express = require('express');
var app = express();
var path = require('path');

app.engine('html', require('ejs').renderFile);
app.configure(function(){
  app.use(express.static(path.join(__dirname) + "/static"));
});
app.get("/", function(req, res){
  res.render("index.html");
});

app.listen(3000);
