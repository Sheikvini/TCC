import { Router } from "express";
import { NovoCadastro, consultar } from "../repository/cadastroRepository.js";

let endpoints = Router();

endpoints.post('/cadastro', async (req, resp) => {
    try {
        let cliente = req.body;



        if (!cliente.nome){
        throw new Error('⚠ Nome obrigatório');}

        else if (!cliente.sex){
        throw new Error('⚠ Sexo obrigatório');}

        

        else if (!cliente.nascimento)
        throw new Error('⚠ Nascimento obrigatório');

        else if (!cliente.cpf)
        throw new Error('⚠ CPF obrigatório');
  
        else if (!cliente.telefone)
        throw new Error('⚠ Telefone obrigatório');

        else if (!cliente.tipo_endereco)
        throw new Error('⚠ Tipo de endereço obrigatório');

        else if (!cliente.cep)
        throw new Error('⚠ Cep obrigatório');

       else if (!cliente.numero_complemento)
        throw new Error('⚠ Complemento obrigatório');

        else if (!cliente.rua)
        throw new Error('⚠ Rua obrigatória');

        else if (!cliente.bairro)
        throw new Error('⚠ Bairro obrigatório');

        else if (!cliente.cidade)
        throw new Error('⚠ Cidade obrigatória');

        else if (!cliente.estado)
        throw new Error('⚠ Estado obrigatório');

        else if (!cliente.senha)
        throw new Error('⚠ Senha obrigatória');

        else if (!cliente.email)
        throw new Error('⚠ Email obrigatório');

        let r1 = await consultar(cliente.email);
        if (r1.length > 0)
        throw new Error('⚠ Email já cadastrado!');

        let dados = await NovoCadastro(cliente)
        resp.send(dados)
    } 
    
    catch (err) {
        
            resp.status(500).send({erro: err.message});
    
    }
})

export default endpoints;
