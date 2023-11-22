import axios from 'axios' 

import {url} from '../constants'


const api = axios.create({
    baseURL: url
})

export async function buscarProdutoPorId(id) {
    const r = await api.get('/produto/' + id);
    return r.data;
  }

  export async function consultarTodosProdutos(){

    const resposta = await api.get('/produto');
    return resposta.data;
}

export async function removerProduto(id){

    const resposta = await api.delete(`/deletar-produto/${id}`);
    return resposta.status;
}