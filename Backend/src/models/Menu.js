const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('pruebarestaurante', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Categoria = require('./Categoria');

sequelize.authenticate()
    .then(() => console.log('Conexión establecida con la base de datos.'))
    .catch(error => console.error('Error al conectar con la base de datos: ', error));

const Menu = sequelize.define('menu', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categoria,
            key: 'id'
        }
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('ACTIVO', 'INACTIVO'),
        allowNull: false
    }
}, {
    freezeTableName: true
});

Menu.belongsTo(Categoria, {foreignKey: 'categoria_id'});

sequelize.sync()
    .then(() => console.log('Tabla menu creada'))
    .catch(error => console.error('Error', error));

module.exports = Menu;
