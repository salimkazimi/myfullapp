var express = require('express')
var app =express();
var path =require('path');

var expresslayout = require('express-ejs-layouts');
var indexRouter = require('./routes/index');
var islamicRouter = require('./routes/islamic');
var registrationRouter = require('./routes/registration');


app.set('layout','./mainlayouts/layout');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(expresslayout);
app.set(express.urlencoded({extended:false}));
app.set(express.join);
app.use(expresslayout)
app.use('/',indexRouter)
app.use('/islamic',islamicRouter)
app.use('/registration',registrationRouter);
app.listen(3000);
module.exports = app;

