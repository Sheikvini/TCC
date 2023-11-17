import { Router } from "express";
import { NovoCadastro, consultar } from "../repository/cadastroRepository.js";

const endpoints = Router();

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

         if (!cliente.tipo_endereco)
        throw new Error('⚠ Tipo de endereço obrigatório');

         if (!cliente.cep)
        throw new Error('⚠ Cep obrigatório');

        if (!cliente.numero_complemento)
        throw new Error('⚠ Complemento obrigatório');

         if (!cliente.rua)
        throw new Error('⚠ Rua obrigatória');

         if (!cliente.bairro)
        throw new Error('⚠ Bairro obrigatório');

         if (!cliente.cidade)
        throw new Error('⚠ Cidade obrigatória');

         if (!cliente.estado)
        throw new Error('⚠ Estado obrigatório');

         if (!cliente.email)
        throw new Error('⚠ Usuário obrigatória');

         if (!cliente.senha)
        throw new Error('⚠ Senha obrigatório');

        let r1 = await consultar(cliente.email);
        if (r1.length > 0)
        throw new Error('⚠ Usuário já cadastrado!');

        let dados = await NovoCadastro(cliente)
        resp.send(dados)
    } 
    
    catch (err) {
        
            resp.status(500).send({erro: err.message});
    
    }
})

export default endpoints;
