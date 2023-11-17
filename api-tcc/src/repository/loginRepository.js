import conexao from "./connection.js";

export async function verificarLogin(email,senha) {

    const comando = `
      SELECT 
      id_cliente as id,
      ds_email as email,
      ds_senha as senha
      FROM tb_cliente
      where ds_email = ?
      and ds_senha = ?
    `
    
   const dados = await conexao.query(comando, [email,senha]);

   let linhas = dados[0]
   let linha = linhas [0]
   console.log (linha)
   
   return linha;
}



