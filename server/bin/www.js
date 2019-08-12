require('dotenv').config();

const express = require('express');
const app = express();
// const bodyParser = require('body-parser'); NOT NEEDED????
const cookieParser = require('cookie-parser');
const multer = require('multer');
const logger = require('morgan');
const createError = require('http-errors');
const compression = require('compression');

const port = process.env.PORT || 8080;

// VIEW ENGINE
app.set('view engine', 'pug');

// APPLY MIDDLEWARE

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(compression());
app.use(express.static('public'));

// DEFINE REST API

// DEFINE 404 endpoint

// RUN SERVER
app.get('/', (req,res)=>{
  res.status(200).render('index', {title: 'the app :)'});
})
app.get('/error', (req,res)=>{
  res.status(200).render('error', {message: 'sorry there was an error'});
})

app.listen(port, (req,res)=>{
  console.log(`Express server is running on port ${port}...`);
})