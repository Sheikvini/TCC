import { Router } from "express";
import { listarProdutos, deletarProduto, buscarProduto, Buscar, buscarProdutoPorId} from "../repository/listprodutoRepository.js";

const endpointsTeste = Router();

endpointsTeste.delete('/deletar-produto/:id', async (req, resp) => {
    try {
      let id = req.params.id;
      let r = await deletarProduto(id);
      if (r == 0)
        throw new Error('Produto não pode ser excluído.');
  
      resp.send();
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  });

  endpointsTeste.get('/produto', async (req, resp) => {
    
    let resposta = await listarProdutos()

    resp.send(resposta);
  });

  endpointsTeste.get('/produto/:id', async (req, resp) => {
    
    let id = req.params.id;

    let resposta = await buscarProdutoPorId(id);

    resp.send(resposta);
  });

  endpointsTeste.get('/produto/pesquisa/:pesquisa', async (req, resp) => {
    try{
      const {pesquisa} = req.params
  
      const resposta = await buscarProduto(pesquisa)
      
      resp.send('resposta');
    }
    catch(err){
      resp.status(500).send({
        erro: err.message
      })
    }
  });

  endpointsTeste.put('/alterar-produto/:id', async (req, resp) => {
    try {
      let produto = req.body;
      let id = req.params.id;

  
      let r = await alterar(id, produto);
      resp.send();
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
    
  
  })



  endpointsTeste.get ('/categoria/:id', async (req,resp)=> {

  const categoria = Number(req.params);

  let r = await Buscar(categoria)

resp.send(r)
  })


export default endpointsTeste