import { Router } from "express";
import { InserirPagamento  } from "../repository/pagamentoRepository.js";

const endpoints = Router();

endpoints.post('/pagamento', async (req, resp) => {
    try {
        let pagamento = req.body;


         if (!pagamento.nome)
        throw new Error('⚠ Nome obrigatório');

         if (!pagamento.nascimento)
        throw new Error('⚠ Nascimento obrigatório');

         if (!pagamento.formadepagamento)
        throw new Error('⚠ Forma de Pagamento obrigatório');

         if (!pagamento.cpf)
        throw new Error('⚠ CPF obrigatório');
  
         if (!pagamento.telefone)
        throw new Error('⚠ Telefone obrigatório');

        if (!pagamento.tpendereco)
        throw new Error('⚠ Tipo de Endereço obrigatório');

         if (!pagamento.cep)
        throw new Error('⚠ CEP obrigatório');

         if (!pagamento.necomplemento)
        throw new Error('⚠ N° Complemento obrigatório');

        if (!pagamento.nomerua)
        throw new Error('⚠ Nome da Rua obrigatório');

         if (!pagamento.bairro)
        throw new Error('⚠ Bairro obrigatória');

         if (!pagamento.cidade)
        throw new Error('⚠ Cidade obrigatório');

         if (!pagamento.estado)
        throw new Error('⚠ Estado obrigatória');

         if (!pagamento.parcelas)
        throw new Error('⚠ Parcelas obrigatórias');

         if (!pagamento.numerocartao)
        throw new Error('⚠ Número do Cartão obrigatório');

        if (!pagamento.vencimento)
        throw new Error('⚠Vencimento obrigatório');

        if (!pagamento.cvc)
        throw new Error('⚠ CVC do Cartão obrigatório');

        let dados = await InserirPagamento(pagamento)
        resp.send(dados)
    } 
    
    catch (err) {
        
            resp.status(500).send({erro: err.message});
    
    }
})

export default endpoints;
