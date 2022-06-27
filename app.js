var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require ('jsonwebtoken');

//REQUIRES de Ruteo
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require ('./routes/productos');
var ventasRouter = require ('./routes/ventas');
var proveedoresRouter = require ('./routes/proveedores');
var categoriasRouter = require ('./routes/categorias');

var app = express();

//Setear la clave privada:
app.set("secretKey", "12345678");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//RUTEO
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/productos', productosRouter);
app.use ('/ventas', ventasRouter);
app.use ('/proveedores', proveedoresRouter);
app.use ('/categorias', categoriasRouter);

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
  res.json({message: err?.message || "ha ocurrido un error"})
});


function validateToken(req, res, next) {
  jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), function(error, payload){
    if(error) {
      return res.status(403).json({message: error.message})
    } else {
      console.log(payload)
      next()
    }
  })
}
app.validateToken = validateToken;


module.exports = app;
