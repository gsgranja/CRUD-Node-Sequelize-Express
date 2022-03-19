const produtoDao = require('../dao/produto.dao');

var produtoController = {
    criarProduto: criarProduto,
    listarProdutos: listarProdutos,
    buscarPorId: buscarPorId,
    atualizarProduto: atualizarProduto,
    deletarProdutoPorId: deletarProdutoPorId
}

function criarProduto(req, res) {
    let produto = req.body;
    produtoDao.criarProduto(produto).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function buscarPorId(req, res) {
    produtoDao.buscarPorId(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deletarProdutoPorId(req, res) {
    produtoDao.deletarProdutoPorId(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Produto deletado com successo!",
                produto: data
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

function atualizarProduto(req, res) {
    produtoDao.atualizarProduto(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Produto atualizado com sucesso!",
                produto: data
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

function listarProdutos(req, res) {
    produtoDao.listarProdutos().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = produtoController;