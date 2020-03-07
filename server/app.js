var createError = require('http-errors');
const config=require('./config/DB');
const mongoose=require('mongoose');
const cors=require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const customers=require('./routes/customers');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();


mongoose.connect(config.DB,{ useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=> console.log('MongoDB Database is connected'))
.catch(err=>console.error('Connection Failed',err))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/customers',customers);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port=process.env.PORT || 4000;
app.listen(port,()=>console.log(`Linstening on port ${port}.....`));

module.exports = app;
