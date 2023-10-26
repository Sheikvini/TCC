import conexao from "./connection.js"; 

export async function NovoCadastro(cliente) {

    const comando = 'insert into tb_cliente (nm_cliente, ds_sex, dt_nascimento, ds_cpf, ds_telefone, ds_tipo_endereco, ds_cep, ds_numero_complemento, ds_rua, ds_bairro, ds_cidade, ds_estado, ds_senha, ds_email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const [resposta] = await conexao.query(comando, [
        cliente.nome, 
        cliente.sex, 
        cliente.nascimento, 
        cliente.cpf,
        cliente.telefone,
        cliente.tipo_endereco,
        cliente.cep,
        cliente.numero_complemento,
        cliente.rua,
        cliente.bairro,
        cliente.cidade,
        cliente.estado,
        cliente.senha,
        cliente.email
    ]);

    cliente.id_cliente = resposta.insertId;

    return cliente;
}

export async function consultar(cliente) {
    let comando = `
        select cc.id_cliente			          as id,
                cc.nm_cliente				        as cliente,
                cc.ds_sex			              as sex,
                cc.dt_nascimento			      as nascimento,
                cc.ds_cpf                   as cpf,
                cc.ds_telefone              as telefone,
                cc.ds_tipo_endereco         as tipo_endereco,
                cc.ds_cep                   as cep,
                cc.ds_numero_complemento    as numero_complemento,
                cc.ds_rua                   as rua,
                cc.ds_bairro                as bairro,
                cc.ds_cidade                as cidade,
                cc.ds_estado	              as estado,
                cc.ds_senha                 as senha,
                cc.ds_email                 as email

          from tb_cliente   	as cc
          where ds_email like ?
    `
  
    let [dados] = await conexao.query(comando,
      [
        '%' + cliente + '%'
      ])
    return dados;
  }
  

