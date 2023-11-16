import { Router } from "express";
import { verificarLogin } from "../repository/loginRepository.js";

const endpoint = Router();

endpoint.post('/login', async (req, resp) => {
  try {
    let {email,senha} = req.body;


    let resposta = await verificarLogin(email,senha)

    if(!email)
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