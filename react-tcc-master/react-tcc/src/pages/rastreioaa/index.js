import Cabecalho from "../../components/cabecalho-semrotas";
import "./rastreio.scss";

import { Link } from 'react-router-dom';
import React, {useState} from 'react' 



export default function Rastreio(){
    
    const [numeroRastreamento, setNumeroRastreamento] = useState('');
    const [status, setStatus] = useState(null);
  
    const handleRastreamento = () => {
      // Lógica para fazer a consulta do número de rastreamento e obter o status
      // Exemplo: Simulação de busca de status após 2 segundos
      setTimeout(() => {
        // Substitua esta lógica pela chamada a uma API real
        const novoStatus = 'Seu pacote está a caminho';
        setStatus(novoStatus);
      }, 2000);
    };
     return(
        <article>
            <Cabecalho/>
            <Link to="/">
                <img className='botao-voltar2' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
            </Link>
            <div className="rastreamento-container">
                <h1 className="p">Pedido</h1>
                
                    <img className="img" src="/assets/img/icon/imagerastreio.png" alt="" />
                
      <form> 
        <input className="oi"
          type="text"
          value={numeroRastreamento}
          onChange={(e) => setNumeroRastreamento(e.target.value)}
          placeholder="Número de Rastreamento"
        />
        <button className="B" onClick={handleRastreamento}>Rastrear</button>
      </form>
      {status && <div className="status">{status}</div>}
         </div>
  
        </article>
    )
}