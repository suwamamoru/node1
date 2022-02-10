const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const router = require('./routes/index');

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', router)
