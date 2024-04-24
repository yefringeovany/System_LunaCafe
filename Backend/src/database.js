const mysql = require('mysql2');
require('dotenv').config()

const connectionMySQL = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connectionMySQL.connect((error) => {
    if (error) {
        console.error('Error al conectar con la base de datos: ', error)
        return;
    }
    console.log('Conexión establecida con la base de datos');
});
