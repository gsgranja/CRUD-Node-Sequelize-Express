const Produto = require('../models/Produto')

var produtoDao = {
	listarProdutos: listarProdutos,
    criarProduto: criarProduto,
    buscarPorId: buscarPorId,
    deletarProdutoPorId: deletarProdutoPorId,
    atualizarProduto: atualizarProduto
/* Aqui vai o comentario da linha acima*/
}

function listarProdutos(){
	return Produto.findAll();
}
/* Aqui vai o comentario da linha acima*/

function buscarPorId(id){
	return Produto.findByPk(id);
}
/* Aqui vai o comentario da linha acima*/

function deletarProdutoPorId(id){
	return Produto.destroy({ where: { id: id } })
}
/* Aqui vai o comentario da linha acima*/

function criarProduto(produto){
	var novoProduto = new Produto(produto);
	return novoProduto.save();
}
/* Aqui vai o comentario da linha acima*/

function atualizarProduto(produto, id){
	var atualizar = { 
		nome: produto.nome,
		descricao: produto.descricao,
		preco: produto.preco
	};
	return Produto.update(atualizar, { where: { id: id } });


}
module.exports = produtoDao;