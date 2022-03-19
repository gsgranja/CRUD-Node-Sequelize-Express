const Sequelize = require('sequelize');
const db = require('../config/database');
const Compra = require('./Compra');

const Produto = db.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }

    // Observacao: Campos de atualizacao e criacao, criados pelo ORM.

});

Produto.hasMany(Compra, {as: 'Produto', allowNull: false});
db.sync();


module.exports = Produto;