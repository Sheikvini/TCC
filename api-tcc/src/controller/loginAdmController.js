import { Router } from "express";
import { verificarLoginadm } from "../repository/loginAdmRepository.js";

const endpoint = Router();

endpoint.post('/loginAdm', async (req, resp) => {
  try {
    let {usuario,senha} = req.body;


    let resposta = await verificarLoginadm(usuario,senha)

    if(!usuario)
    throw new Error('Usuário obrigatório')

    if(!senha)
    throw new Error('Senha obrigatório')

    if(resposta.length < 1)
      throw new Error('Senha ou Usuário incorretos');

      resp.status(204).send();
    
  } catch (err) {
    resp.status(500).send({erro: err.message});
  }
});

export default endpoint;