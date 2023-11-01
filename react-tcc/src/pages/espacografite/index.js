import Cabecalho from "../../components/cabecalho"
import "./index.scss"
import Rodape from "../../components/rodape"
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../../apiURL"

export default function Grafite() {
    const [produtos, setProdutos] = useState([])

    async function listarProdutos(){
        const resp = await axios.get( url + '/produto')

        const respFiltrados = resp.data.filter(item => item.nm_categoria === 'Grafite')

        setProdutos(respFiltrados)

    }

    useEffect(() => {
        listarProdutos()
    }, [])
    return(

        <article>
        <Cabecalho/>
        <div className="espacografite">

            
                <h1>Espaço Grafite</h1>
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

                
                {/* <div>  
                   <img src="/assets/img/produtos/img1.png"></img>
                   <p>Tinta spray brilho natural Super Color grafite 350ml Tekbond
                    </p>
                   <p2>de: R$ 63,90</p2>
                   <h1>por: R$ 57,50</h1>
               </div>    
           
               <div>  
                   <img src="/assets/img/produtos/img2.png"></img>
                   <p>Tinta Tekbond Super Color Spray Fosco Preto 350ml</p>
                   <p2>de: R$ 32,90</p2>
                   <h1>por: R$21,90 
                    </h1>
               </div>    

               <div>  
                   <img src="/assets/img/produtos/img3.png"></img>
                   <p>Tinta spray esmalte alto brilho amarelo 350ml Sherwin Williams
                    </p>
                   <p2></p2>
                   <h1>R$ 38,90/cada</h1>
               </div>    


           </div>

           <div> 
           
                <div>  
                   <img src="/assets/img/produtos/img4.png"></img>
                   <p>Tinta spray brilho natural Super Color azul 350ml Tekbond
                    </p>
                   <p2></p2>
                   <h1>R$ 13,90</h1>
               </div>    
           
               <div>  
                   <img src="/assets/img/produtos/img5.png"></img>
                   <p>Posca Marcador de tinta acrílica, ponta larga, preto</p>
                   <p2></p2>
                   <h1>R$ 42,40</h1>
               </div>    

               <div>  
                   <img src="/assets/img/produtos/img6.png"></img>
                   <p>Tinta Acrílica Fosca Standard Interior Cotta 3,6 L Luxens
                    </p>
                   <p2></p2>
                   <h1>R$ 96,30/cada</h1>
               </div>    


           </div>

           <div> 
           
                <div>  
                   <img src="/assets/img/produtos/img7.png"></img>
                   <p>Stels Pistola De Pintura Com Tanque Alto Alimentaçao Por Gravidade</p>
                   <p2></p2>
                   <h1>R$ 75,90</h1>
               </div>    
           
               <div>  
                   <img src="/assets/img/produtos/img8.png"></img>
                   <p>Pistola Elétrica para Pintura, Vonder, 127 V</p>
                   <p2>de: R$299,99</p2>
                   <h1>por: R$ 272,90</h1>
               </div>    

               <div>  
                   <img src="/assets/img/produtos/img9.png"></img>
                   <p>Caneta Uni Paint Marker PX-30 Branca</p>
                   <p2>de: 65,60</p2>
                   <h1>por: 56,99</h1>
               </div>    
                */}

            </div> 
           
            <img src="/assets/img/logo.png"></img>

        </div>
        <Rodape/>
        </article>

    )
}