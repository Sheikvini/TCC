import conexao from "./connection.js";

export async function listarProdutos(produto){

    const comando = `select * from tb_produto`;

    const [resposta] = await conexao.query(comando);
    return resposta;
}

export async function  buscarProduto(nomeProduto){
  const comando = `select * from tb_produto
                      where nm_produto like ? `

  const [resp] = await conexao.query(comando, [`%${nomeProduto}%`])

  return resp[0]
}


export async function deletarProduto(id){
    const comando = 'delete * from tb_produto where id = ?';

    const [resposta] = await conexao.query(comando, [id]);

    return resposta;
}


export async function enviarImagem(id,info1){
  const formData = new formData();
  formData.append ('capa', info1);

  const [resposta] = await api.put('/filme/${id}/capa',formData, {
    Headers: {

      "content-type": "multipart/form-data"
    },
 });

  return resposta;
}



export async function alterarProduto(id,produto){

        let comando = `
            update tb_produto 
                    nm_produto            = ?,
                   vl_valor               = ?,
                   vl_valor_promocional   = ?,
                   nr_qtd_estoque         = ?,
                   id_categoria           = ?,
                   bt_disponivel          = ?,
                   ds_descricao           = ?,
                  where id_produto        = ?
        `
      
        let [resp] = await conexao.query(comando, 
          [
            produto.nome,
            produto.valor,
            produto.valorPromocional,
            produto.qtdEstoque,
            produto.categoria,
            produto.disponivel,
            produto.descricao,
            id
          ])
        
        return resp.affectedRows;
      }
      
export async function Buscar (categoria) {

  let comando = `select nm_produto   ,
  nm_categoria ,
  vl_preco     
  from tb_produto where nm_categoria = ?` 


  let r = await conexao.query (comando, [categoria])

  return r ;

}
