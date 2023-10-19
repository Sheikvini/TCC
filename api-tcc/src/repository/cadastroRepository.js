import conexao from "./connection.js"; 

export async function NovoCadastro(cliente) {

    const comando = 'insert into tb_cliente (nm_cliente, ds_sex, ds_nascimento, ds_cpf, ds_telefone, ds_senha, ds_email) VALUES (?, ?, ?, ?, ?, ?, ?)';

    const [resposta] = await conexao.query(comando, [
        cliente.nome, 
        cliente.sex, 
        cliente.nascimento, 
        cliente.cpf,
        cliente.telefone,
        cliente.senha,
        cliente.email
    ]);

    cliente.id_cliente = resposta.insertId;

    return cliente;
}

export async function consultar(cliente) {
    let comando = `
        select cc.id_cliente			    as id,
                cc.nm_cliente				  as cliente,
                cc.ds_sex			        as sex,
                cc.ds_nascimento			as nascimento,
                cc.ds_cpf             as cpf,
                cc.ds_telefone        as telefone,
                cc.ds_senha           as senha,
                cc.ds_email           as email

          from tb_cliente   	as cc
          where ds_email like ?
    `
  
    let [dados] = await conexao.query(comando,
      [
        '%' + cliente + '%'
      ])
    return dados;
  }
  

