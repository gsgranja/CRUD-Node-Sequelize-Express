const express = require('express');
const router = express.Router();
const compraController = require('../controller/compra.controller.js');

router.post('/', compraController.criarCompra);
router.get('/', compraController.listarCompras);
router.get('/:id', compraController.buscarPorId);
router.put('/:id', compraController.atualizar);
router.delete('/:id', compraController.deletar);

module.exports = router;