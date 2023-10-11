import Cabecalho from "../../components/cabecalho-semrotas"
import "./carrinho.scss"
import Rodape from "../../components/rodape"
import { Link } from 'react-router-dom';


export default function Carrinho(){
return(
     <article>
       <Cabecalho/>
            <section>
                <h1>
                    <button className="C">Carrinho</button>
                    <button className="MP">Meus Pedidos</button>
                    <button className="R">Rastrear</button>
                    <button className="CU">Cupons</button>
                </h1>
                
                <Link to="/">
                         <img className='botao-voltar49' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
                </Link>
                
                <hr className="linha"></hr>

                <header className="Mp">Meu Carrinho</header>

               
                
            </section> 
     </article>
 )
} 