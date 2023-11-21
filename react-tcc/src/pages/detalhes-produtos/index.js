import Cabecalho from "../../components/cabecalho"
import "./index.scss"
import Rodape from "../../components/rodape"
import { useEffect, useState } from "react"
import Storage from "local-storage"
import axios from "axios"
import { url } from "../../constants"
import { Link, useParams } from "react-router-dom"
import { toast } from 'react-toastify'


export default function Tintasinternas() {
    const [produtos, setProdutos] = useState([])
    const {id} = useParams()


    async function listarProdutos(){
        const resp = await axios.get( url + '/produto')
        const idNumber = Number(id)

        const respFiltrados = resp.data.filter(item => item.id_produto === idNumber)

        setProdutos(respFiltrados)

    }

    function AdicionarCarrinho(){
        let carrinho = [];
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho');
        }

        if (!carrinho.find(item => item.id === id)){
            carrinho.push({
                id:id,
                qtd:1
               
            })
           
            Storage('carrinho', carrinho);
            
        }  
         toast.success('Produto adicionado ao carrinho!');
     }

    useEffect(() => {
        listarProdutos()
    }, [])

        return (
            <article>
                <Cabecalho />
            
                <div className="cont-det">

                    <div >    
                        {produtos.map(item => {

                           return(
                            <section>
                                <div className="principal-del">
                                    
                                    <div className="esq-info">  
                                        <img className="img-peq" src={item.img_produto}></img>
                                    </div>

                                    <div className="info-princ">
                                        <img className="img-princ" src={item.img_produto}></img>
                                    </div>

                                    <div className="desc-princ">    
                                        <h1>{item.nm_produto}</h1>
                                        <h3> {item.vl_preco ?  `R$ ${item.vl_preco}` : ''} </h3>
                                    
                                        <p className="desc">{item.ds_descricao }</p>
                                        <p>Tipo: {item.ds_tipo}</p>
                                        
                                        <div className="text-addcar" onClick={AdicionarCarrinho}>
                                            <img className="addcar-prod" src="/assets/img/icon/carrinhoazul.png"></img>
                                            <p  >Adicionar ao carrinho</p>
                                        </div>
                                       
                                        <Link to={'/pagamento'}>
                                            <button>Comprar</button> 
                                        </Link>
                                    </div>
                                    
                                    
                                </div>
                            </section>
                        )
                    })}
                </div>  
            <div className="logo-del">
                <img src="/assets/img/logo.png"></img>
            </div>
        </div>
        <Rodape/>
        </article>
    )
}
