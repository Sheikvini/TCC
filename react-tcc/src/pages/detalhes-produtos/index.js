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
            
                <div className="cont-det">

                    <div >    
                        {produtos.map(item => {

                           return(

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
                                    <p>{item.ds_descricao }</p>
                                </div>

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