const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produto.controller');

router.post('/', produtoController.criarProduto);
router.get('/', produtoController.listarProdutos);
router.get('/:id', produtoController.buscarPorId);
router.put('/:id', produtoController.atualizarProduto);
router.delete('/:id', produtoController.deletarProdutoPorId);

module.exports = router;