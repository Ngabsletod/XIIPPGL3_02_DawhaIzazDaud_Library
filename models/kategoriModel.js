const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Kategori = sequelize.define('Kategori', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'kategori',
    timestamps: false
});

module.exports = Kategori;
