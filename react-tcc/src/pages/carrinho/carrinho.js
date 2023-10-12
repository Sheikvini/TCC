import Cabecalho from "../../components/cabecalho-semrotas"
import "./carrinho.scss"
import Rodape from "../../components/rodape"
import { Link } from 'react-router-dom';


export default function Carrinho(){
return(
     <header>
       <Cabecalho/>
       <section className="principal-carrinho">
                
                <h1 className="submenu-carrinho">
                    <Link className='link_C' to={'/carrinho'}>
                        <button className="C">Carrinho</button>
                    </Link>
                        
                    <Link className='link_mp' to={'/pedidos-realizados'}>
                            <button className="MP" >Meus Pedidos</button>
                    </Link>
                    
                    <Link className='link_R' to={'/rastreio'}>
                        <button className="R">Rastrear</button>
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
                    
                    <div className="linha1">
                        <hr className="l1"/>
                    </div>

            </section> 
            <footer className="rod-carrinho">
                <Rodape/>
            </footer>
     </header>
 )
} 