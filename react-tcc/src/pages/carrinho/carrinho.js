import Cabecalho from "../../components/cabecalho-semrotas"
import "./carrinho.scss"
import Rodape from "../../components/rodape"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import storage from "local-storage";
import { buscarProdutoPorId } from "../../api/produtoAPI";
import CarrinhoItem from "../../components/carrinhoitem";

export default function Carrinho(){

    const [itens, setItens] = useState([]);
  

    async function carregarCarinho(){
        let carrinho = storage('carrinho');
        if (carrinho){

            let temp = [];

            for (let produto of carrinho) {
               let p = await buscarProdutoPorId(produto.id);   
              
               temp.push({
                produto: p,
                qtd: produto.qtd
               })
            }
            console.log(temp);
            setItens(temp);
        }
        
    }

    useEffect(() => {
        carregarCarinho();
    }, [])

return(
     <header>
       <Cabecalho/>
       <section className="principal-carrinho">
                
                <h1 className="submenu-carrinho">
                    <Link className='link_C' to={'/carrinho'}>
                        <button className="C">Carrinho</button>
                    </Link>
                        
                    <Link className='link_mp' to={'/rastreio'}>
                            <button className="MP" >Rastrear</button>
                    </Link>
                    
                    <Link className='link_R' to={'/sobrenos'}>
                        <button className="R">Sobre nós</button>
                    </Link>

                    <Link className='link_TU' to={'/termosuso'}>
                        <button className="TU">Termos de Uso</button>
                    </Link>
                </h1>
            
                <section className="container-carrinho">    
                    <Link to="/">
                         <img className='botao-voltar49' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
                    </Link>
                    
                    <div className="text-MP">
                        <h2 className="Mp">Meu Carrinho</h2>
                    </div>
                    
                    
                </section>
                
                <div >
                    <Link className="rastreio-car" to={'https://rastreamento.correios.com.br/app/index.php'}>
                        <img className="imgrastreio-car" src="/assets/img/cam.png"/>
                        <p>Rastrear Pedido</p>
                    </Link>
                </div>

                <div className="carrinho">    
                    <div className="itens">
                        {itens.map((item) =>
                            <CarrinhoItem item={item} />
                         )}
                    </div>


                    

                    <div className="resumo">
                        <h1>Subtotal</h1>
                        <h3>(3 itens)</h3>
                        <p>R$ 9999,00</p>
                        <button>Fechar Pedido</button>
                    </div>
                </div>
            </section> 
            <footer className="rod-carrinho">
                <Rodape/>
            </footer>
     </header>
 )
} 