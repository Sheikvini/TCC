import { Router } from "express";
import { NovoCadastro,consultar } from "../repository/cadastroRepository.js";

let endpoints = Router();

endpoints.post('/cadastro', async (req, resp) => {
    try {
        let cliente = req.body;

        if (!cliente.nome)
        throw new Error('⚠ Nome obrigatório');

        if (!cliente.sex)
        throw new Error('⚠ Sexo obrigatório');

        if (!cliente.nascimento)
        throw new Error('⚠ Nascimento obrigatório');

        if (!cliente.cpf)
        throw new Error('⚠ CPF obrigatório');
  
        if (!cliente.telefone)
        throw new Error('⚠ Telefone obrigatório');

        if (!cliente.senha)
        throw new Error('⚠ Senha obrigatória');

        if (!cliente.email)
        throw new Error('⚠ Email obrigatório');
   
        let r1 = await consultar(cliente.email);
        if (r1.length > 0)
        throw new Error('⚠ Email já cadastrado!');
  
        let dados = await NovoCadastro(cliente)
        resp.send(dados)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
