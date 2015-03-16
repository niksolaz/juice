var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var router = require('./router/index');
var users = require('./router/users');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);


router.all('/', function (req, res, next) {  
  console.log('Someone made a request!');
  next();
});

router.get('/', function (req, res) {  
  res.render('index');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var server = app.listen(3000,function(){

  var host = server.address().address
  var port = server.address().port

  console.log('You are connected at http://%s:%s',host,port)
});

module.exports = app;


