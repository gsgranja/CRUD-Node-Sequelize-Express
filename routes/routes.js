const express = require('express');
const router = express.Router();
const produtoRoutes = require('./produto.route');
const compraRoutes = require('./compra.route');

router.use('/produto', produtoRoutes);
router.use('/compra', compraRoutes);

module.exports = router;