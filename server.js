var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));
var port=process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port 3000');
});
