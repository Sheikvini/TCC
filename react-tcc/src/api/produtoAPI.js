import axios from 'axios' 

import {url} from '../constants'


const api = axios.create({
    baseURL: url
})

export async function buscarProdutoPorId(id) {
    const r = await api.get('/produto/' + id);
    return r.data;
  }