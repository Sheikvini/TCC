import Cabecalho from "../../components/cabecalho-semrotas"
import "./index.scss"
import Rodape from "../../components/rodape"
import { Link } from 'react-router-dom';


export default function P_realizados(){
return(
     <header>
       <Cabecalho/>
            <section className="principal-p_realizados">
                
                <h1 className="sub-p_realizados">
                    <Link className='link_C1' to={'/carrinho'}>
                        <button className="C1">Carrinho</button>
                    </Link>
                        
                    <Link className='link_mp1' to={'/pedidos-realizados'}>
                            <button className="MP1" >Meus Pedidos</button>
                    </Link>
                    
                    <Link className='link_R1' to={'/rastreio'}>
                        <button className="R1">Rastrear</button>
                    </Link>

                    <Link className='link_TU1' to={'/termosuso'}>
                        <button className="TU1">Termos de Uso</button>
                    </Link>
                </h1>
            
                <section className="container-p_realizados">    
                    <Link to="/">
                         <img className='botao-voltar50' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
                    </Link>
                    
                    <div className="text-MP1">
                        <h2 className="Mp1">Pedidos Realizados</h2> 
                    </div>
                    
                </section>
                    
                    <div className="linha1">
                        <hr className="l1"/>
                    </div>

            </section> 
            <footer className="rod-p_realizados">
                <Rodape/>
            </footer>
     </header>
 )
} 