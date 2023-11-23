import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho-semrotas";
import "./index.scss";
import Rodape from "../../components/rodape";
import { consultarTodosProdutos, removerProduto } from "../../api/produtoAPI.js";
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from "../../constants.js";
import axios from "axios";

export default function BuscarProduto() {

  const [produtos, setProdutos] = useState([]);

  const navigate = useNavigate();

  async function carregarProdutos() {
    const resposta = await consultarTodosProdutos();
    setProdutos(resposta);
  }

  useEffect(() => {
    carregarProdutos();
    console.log(carregarProdutos);
  }, [])

  async function remover(id, produto) {

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Remover Produto</h1>
            <p>Deseja excluir o produto?</p>
            <button onClick={onClose}>Não</button>
            <button
              onClick={() => {
                this.handleClickDelete();
                onClose();
              }}
            >
              Sim
            </button>
          </div>
        );
      }
    });
   
  }

  return (

    <hearder>
      <Cabecalho />
      <div className="botao">
        <Link to="/adm">
          <img className='botao-voltar1-cad' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
        </Link>
        </div>
      <section className="mae-buscar">

        <h1> Busca Produtos</h1>
        <div>
          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Modelo</th>
                <th>Categoria</th>
                <th>Preço</th>
              </tr>
            </thead>

            {produtos.map(item =>

              <tbody>
                <tr key={item.id_produto}>
                  <td>{item.id_produto}</td>
                  <td>{item.nm_produto} </td>
                  <td>{item.nm_categoria}</td>
                  <td>R${item.vl_preco}</td>
                  <td>
                  <button onClick={() => remover(item.id_produto, item.nm_produto)}><img  id='trash' src='/assets/img/icon/lixeira.png'  /></button>
                  </td>



                </tr>
              </tbody>

            )}

          </table>
        </div>
      </section>

      <Rodape />
    </hearder>
  )
}