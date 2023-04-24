const express = require('express');
const app = express();
const session = require('express-session');
const {sess} = require('../session/session');
 
app.use((session(sess)));
const router = require('../routes/routes.js');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(router);

module.exports = app
