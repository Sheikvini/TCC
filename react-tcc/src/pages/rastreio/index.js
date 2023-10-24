import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import "./index.scss";
import { Link } from 'react-router-dom';


export default function rastreio() {

    return (
    <article>
    <Cabecalho />
        <div className="rastreio">
        <section className="container-rastreio">    
                    <Link to="/">
                         <img className='botao-voltar49' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
                    </Link>
        <img src="assets/img/perfil.png" alt="" />
            <h1>Pedidos</h1>
            <p>Código do rastreio: xxx-xxx-xxx</p>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </section> 
        </div>
        </article>
    )
}