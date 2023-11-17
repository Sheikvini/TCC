import conexao from "./connection.js";

export async function InserirNovoProduto(produto) {
    const comando = 'insert into tb_produto (img_produto, nm_produto, vl_preco, vl_promocao, qtd_estoque, ds_descricao, ds_tipo, bt_disponivel, ds_fabricante, ds_recomendacao, ds_validade, nm_categoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
   
    const [resposta] = await conexao.query(comando, [
        produto.img, 
        produto.nome, 
        produto.preco, 
        produto.promocao,
        produto.estoque,
        produto.descricao,
        produto.tipo,
        produto.disponivel,
        produto.fabricante,
        produto.recomendacao,
        produto.validade,
        produto.categoria,
    ]);

    produto.id_produto = resposta.insertId;

    return produto;
}

export async function nvproduto(produto) {
    let comando = `
        select cc.id_produto			        as id,
                cc.img_produto             as img        
                cc.nm_produto				    as nome,
                cc.vl_preco			            as preco,
                cc.vl_promocao			        as promocao,
                cc.qtd_estoque                  as estoque,
                cc.ds_descricao                 as descricao,
                cc.ds_tipo                      as tipo_endereco,
                cc.bt_disponivel                as disponivel,
                cc.ds_fabricante                as fabricante,
                cc.ds_recomendacao              as recomendacao,
                cc.ds_validade                  as validade,
                cc.nm_categoria                 as categoria

    `
  
    let [dados] = await conexao.query(comando,
      [
        '%' + produto + '%'
      ])
    return dados;
}
