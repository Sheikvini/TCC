import conexao from "./connection.js";

export async function verificarLoginadm(usuario,senha) {

    const comando = 'insert into tb_loginAdm (ds_usuario, ds_senha) VALUES (?, ?)';
    
     
   const [dados] = await conexao.query(comando, [usuario,senha]);

    return dados
}