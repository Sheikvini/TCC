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
                                <p2> {item.vl_promocao ?  `de: R$ ${item.vl_promocao}` : ''} </p2>
                                <h1>{item.vl_promocao ? 'por: ' : ''}R$ {item.vl_preco} </h1>
                            </div>
                        )
                    })}


                </div>
                {/* <div> 
                
                <div>  
                <img src="/assets/img/produtos/tinta1.png"></img>
                <p>Tinta Pva Acrílica Interna Coralar Branco 
                3.6 litros - Coral</p>
                        <p2>de: R$ 63,90</p2>
                        <h1>por: R$ 57,51</h1>
                    </div>    
                
                    <div>  
                        <img src="/assets/img/produtos/tinta2.png"></img>
                        <p>Tinta Acrílica Fosca Gesso & Drywall Econômica Interior Branco 18 L Suvinil</p>
                        <p2>de: R$ 294,90/cada</p2>
                        <h1>por: R$ 249,90</h1>
                    </div>    

                    <div>  
                        <img src="/assets/img/produtos/tinta3.png"></img>
                        <p>Tinta Acrílica Fosca Plural Econômica Interior Branco 18 L Iquine</p>
                        <p2></p2>
                        <h1>R$ 119,90 /cada</h1>
                    </div>    


                </div>

                <div> 
                
                     <div>  
                        <img src="/assets/img/produtos/tinta4.png"></img>
                        <p>Tinta Acrílica Fosca Standard Interior Grafite Neutral 3,6 L Luxens</p>
                        <p2></p2>
                        <h1>R$ 114,90 /cada</h1>
                    </div>    
                
                    <div>  
                        <img src="/assets/img/produtos/tinta5.png"></img>
                        <p>Tinta Acrílica Fosca Standard Interior Lava 3,6 L Luxens</p>
                        <p2></p2>
                        <h1>R$ 114,90 /cada</h1>
                    </div>    

                    <div>  
                        <img src="/assets/img/produtos/tinta6.png"></img>
                        <p>Tinta Acrílica Fosca Standard Interior Lava 3,6 L Luxens</p>
                        <p2></p2>
                        <h1>R$ 114,90 /cada</h1>
                    </div>    


                </div>

                <div> 
                
                     <div>  
                        <img src="/assets/img/produtos/tinta7.png"></img>
                        <p>Tinta Acrílica Fosca Standard Interior Lebre Selvagem 3,6 L Luxens</p>
                        <p2></p2>
                        <h1>R$ 114,90 /cada</h1>
                    </div>    
                
                    <div>  
                        <img src="/assets/img/produtos/tinta8.png"></img>
                        <p>Tinta Acrílica 3,6L Suvinil para Paredes Internas e Externas Branca</p>
                        <p2></p2>
                        <h1>R$ 140,30 /cada</h1>
                    </div>    

                    <div>  
                        <img src="/assets/img/produtos/tinta9.png"></img>
                        <p>Tinta Acrílica 3,6L Suvinil para Paredes Internas e Externas Branca</p>
                        <p2></p2>
                        <h1>R$ 56,90 /cada</h1>
                    </div>    


                </div> */}
                
            <img src="/assets/img/logo.png"></img>
        </div>
        <Rodape/>
        </article>
    )
}