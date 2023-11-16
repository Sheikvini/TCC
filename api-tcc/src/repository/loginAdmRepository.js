import conexao from "./connection.js";

export async function verificarLoginadm(usuario,senha) {

    const comando = `SELECT 
    ds_usuario as usuario, 
    ds_senha as senha
    FROM tb_cadastroAdm
    where ds_usuario = ?
    and ds_senha = ?
  `;
     
   const [dados] = await conexao.query(comando, [usuario,senha]);

    return dados;
}