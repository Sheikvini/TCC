import conexao from "./connection.js"; 

export async function InserirPagamento(pagamento) {

    const comando = 'insert into tb_pedido (nm_nome, dt_nascimento, ds_formadepagamento, ds_cpf, ds_telefone, ds_tpendereco, ds_cep, ds_necomplemento, ds_nomerua, ds_bairro, ds_cidade, ds_estado, ds_parcelas, ds_numerocartao, ds_numerocartao, ds_cvc) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const [resposta] = await conexao.query(comando, [
        pagamento.nome, 
        pagamento.nascimento, 
        pagamento.formadepagamento, 
        pagamento.cpf,
        pagamento.telefone,
        pagamento.tpendereco,
        pagamento.cep,
        pagamento.necomplemento,
        pagamento.nomerua,
        pagamento.bairro,
        pagamento.cidade,
        pagamento.estado,
        pagamento.parcelas,
        pagamento.numerocartao,
        pagamento.vencimento,
        pagamento.cvc
    ]);

    pagamento.id_pagamento = resposta.insertId;

    return pagamento;
}
