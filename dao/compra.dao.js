const Compra = require('../models/Compra');

var compraDao = {
    listarCompras: listarCompras,
    criarCompra: criarCompra,
    buscarPorId: buscarPorId,
    deletar: deletar,
    atualizar: atualizar
}

function listarCompras() {
    return Compra.findAll();
}

function buscarPorId(id) {
    return Compra.findByPk(id);
}

function deletar(id) {
    return Compra.destroy({ where: { id: id } });
}

function criarCompra(compra) {
    var novaCompra = new Compra(compra);
    return novaCompra.save();
}

function atualizar(compra, id) {
    var atualizar = {
        total: compra.total,
        data_atualizacao: compra.data_atualizacao,
        tipo_pagamento: compra.tipo_pagamento,
        status: compra.status,
        produto: compra.produto
    };
    return Compra.update(atualizar, { where: { id: id } });
}
module.exports = compraDao;