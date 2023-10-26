import { Router } from "express";
import { InserirNovoProduto } from '../repository/add-produtoRepository.js';

let endpoint = Router();


endpoint.post('/inserir', async (req, resp) => {
    try {
        const produto = await req.body;

    
        if(!produto.produto)
            throw new Error('⚠ Nome obrigatório')

        if(!produto.preco)
            throw new Error('⚠ Preço obrigatório')

        if(!produto.promocao)

        if(!produto.estoque)
            throw new Error('⚠ Estoque obrigatório')

        if(!produto.descricao)
            throw new Error('⚠ Descrição obrigatória')

        if(!produto.tipo)
            throw new Error('⚠ Tipo obrigatório')

        if(!produto.disponivel)
            throw new Error('⚠ Disponibilidade obrigatória')
    
        if(!produto.fabricante)
            throw new Error('⚠ Fabricante obrigatório')

        if(!produto.recomendacao)
            throw new Error('⚠ Recomendação obrigatório')

        if(!produto.validade)
            throw new Error('⚠ Validade obrigatória')

        if(!produto.categoria)
            throw new Error('⚠ Categoria obrigatória')
            
        const dados = await InserirNovoProduto(produto)
        resp.send(dados)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    

})

export default endpoint