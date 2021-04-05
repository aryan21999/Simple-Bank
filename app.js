var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var redirect = require('express-redirect');
//mongoose.Promise = global.Promise;

var index = require('./routes/index');
var auth = require('./routes/auth');
var register = require('./routes/register');
var member = require('./routes/member');
var api = require('./routes/api');
var app = express();
redirect(app);

mongoose.connect('mongodb+srv://Aryan:09876Arya@cluster0.h0l2c.mongodb.net/accounts?retryWrites=true&w=majority');
 var db = mongoose.connection;




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login',auth);
app.use('/register',register);
app.use('/member',member);
app.use('/api',api);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

var port = process.env.PORT || '4000'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})



module.exports = app;
