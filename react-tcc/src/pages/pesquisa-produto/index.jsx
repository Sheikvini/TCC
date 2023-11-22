import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho-semrotas";
import "./index.scss";
import Rodape from "../../components/rodape"; 
import { consultarTodosProdutos, removerProduto } from "../../api/produtoAPI.js";
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BuscarProduto() {

    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();

    async function carregarProdutos(){
        const resposta = await consultarTodosProdutos();
        setProdutos(resposta);
      }

      useEffect(() => {
        carregarProdutos();
        console.log(carregarProdutos);
      }, [])

      async function remover(id, produto){

        confirmAlert({
          title: "Remover Produto",
          message: `Deseja remover o produto ${produto}?`,
          buttons: [
            {
              label: 'Sim',
              onClick: async () => {
    
    
                const resposta = await removerProduto(id, produto);
                consultarTodosProdutos();
                toast.dark('Produto Removido com Sucesso!'); 
                
                carregarProdutos();
              }
            },
            {
              label: 'Não'
            }
          ]
        })
      }

    return (

        <hearder>
            <Cabecalho/>
                <section className="mae-buscar">
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
                                    <img className='marcaTD'  src='/assets/img/logo.png' alt='' height={20} 
                                    onClick={e => {
                                    e.stopPropagation(); 
                                    remover(item.id_produto, item.nm_produto)}} />
                                </td>
                                
                                
                
                            </tr>
                        </tbody>

                    )}

                    </table>
                </section>
            <footer className="rod-carrinho">
                <Rodape/>
            </footer>
        </hearder>
    )
}