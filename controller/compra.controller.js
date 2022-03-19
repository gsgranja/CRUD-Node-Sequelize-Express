const compraDao = require('../dao/compra.dao');
var compraController = {
    criarCompra: criarCompra,
    listarCompras: listarCompras,
    buscarPorId: buscarPorId,
    atualizar: atualizar,
    deletar: deletar
}

function criarCompra(req, res) {
    let compra = req.body;
    compraDao.criarCompra(compra).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function buscarPorId(req, res) {
    compraDao.buscarPorId(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deletar(req, res) {
    compraDao.deletar(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Compra deletada com sucesso.",
                compra: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function atualizar(req, res) {
    compraDao.atualizar(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Compra atualizada com Sucesso",
                compra: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function listarCompras(req, res) {
    compraDao.listarCompras().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = compraController;