const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(require('./controllers/AuthController'));
app.use(require('./controllers/CategoriaController'));
app.use(require('./controllers/MenuController'));

module.exports = app;