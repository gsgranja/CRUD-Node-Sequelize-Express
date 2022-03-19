const Sequelize = require('sequelize');
const db = require('../config/database');

const Compra = db.define('compra', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    tipo_pagamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }

    // Observacao: Campos de atualizacao e criacao, criados pelo ORM.
});
// Compra.associate = function(models) {
// Compra.belongsTo(models.Produto, {foreignKey: 'produtoId', as: 'produto'})};

module.exports = Compra;