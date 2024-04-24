const {Sequelize} = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
        {
            host: process.env.DB_HOST,
            dialect: 'mysql'
        }
);

const Usuario = require('./src/models/Usuario');
const Categoria = require('./src/models/Categoria');
const Menu = require('./src/models/Menu');

sequelize.sync()
    .then(() => console.log(''))
    .catch(error => console.error('Error al crear las tablas: ', error));
