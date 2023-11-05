import Cabecalho from "../../components/cabecalho"
import "./index.scss"
import Rodape from "../../components/rodape"
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../../apiURL"

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
                                <img src={item.img_produto}></img>
                                <p>{item.nm_produto}</p>
                                <p2> {item.vl_preco ?  `de: R$ ${item.vl_preco}` : ''} </p2>
                                <h1>{item.vl_promocao ? 'por: ' : ''}R$ {item.vl_promocao} </h1>
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