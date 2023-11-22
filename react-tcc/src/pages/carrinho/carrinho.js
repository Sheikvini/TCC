import Cabecalho from "../../components/cabecalho-semrotas"
import "./carrinho.scss"
import Rodape from "../../components/rodape"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import storage from "local-storage";
import { buscarProdutoPorId } from "../../api/produtoAPI";
import CarrinhoItem from "../../components/carrinhoitem";

export default function Carrinho() {

    const [itens, setItens] = useState([]);

    function removerItem(id){
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id !== id);

        Storage ('carrinho', carrinho);
        carregarCarinho();
    }

    async function carregarCarinho() {
        let carrinho = storage('carrinho');
        if (carrinho) {

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

    function valortotal() {
        let total = 0;
        for (let item of itens) {
            
            if (item.produto)
                total += item.produto.vl_preco * 1

        }
        return total.toFixed(2)


    }

    useEffect(() => {
        carregarCarinho();
    }, [])

    return (
        <header>
            <Cabecalho />
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
                        <img className="imgrastreio-car" src="/assets/img/cam.png" />
                        <p>Rastrear Pedido</p>
                    </Link>
                </div>

                <div className="carrinho">
                    <div className="itens">
                        {itens.map((item) =>
                            <CarrinhoItem item={item} removerItem={removerItem} />
                        )}
                    </div>




                    <div className="resumo">
                        <h1>Subtotal</h1>
                        <p>R$ {valortotal()} </p>
                        <button>Fechar Pedido</button>
                    </div>
                </div>
            </section>
            <footer className="rod-carrinho">
                <Rodape />
            </footer>
        </header>
    )
} 