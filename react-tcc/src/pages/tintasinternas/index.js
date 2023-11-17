import Cabecalho from "../../components/cabecalho"
import "./index.scss"
import Rodape from "../../components/rodape"
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../../constants"
import { Link } from "react-router-dom"

export default function Tintasinternas() {
    const [produtos, setProdutos] = useState([])

    async function listarProdutos(){
        const resp = await axios.get( url + '/produto')

        const respFiltrados = resp.data.filter(item => item.nm_categoria === 'Internas')

        setProdutos(respFiltrados)

    }

    useEffect(() => {
        listarProdutos()
    }, [])

    return (
    <article>
    <Cabecalho />
        <div className="tintasinternas">

            
            <h1>  Tintas Internas </h1>


                <div>
                    {produtos.map(item => {
                        return(        
                            <div>            
                                <Link className="link-delt" to={`/detalhes-produtos/${item.id_produto}`} >  
                                <img src={item.img_produto}></img>
                                <p>{item.nm_produto}</p>
                                <p2> {item.vl_promocao ?  `de: R$ ${item.vl_promocao}` : ''} </p2>
                                <h1>{item.vl_promocao ? 'por: ' : ''}R$ {item.vl_preco} </h1>
                                </Link>
                            </div>
                        )
                    })}


                </div>
                
            <img src="/assets/img/logo.png"></img>
        </div>
        <Rodape/>
        </article>
    )
}