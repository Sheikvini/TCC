import './index.scss';
import Pagamento from '../../components/pagamento/index.js';
import React from 'react';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho-semrotas/index.js';

export default function Cagamento() {
  const handleClick = () => {
    
    alert('Botão "Finalizar" clicado!');
  };

  return (
  
<article className='cont-cadastro'>
    <Cabecalho/>
    <header className="pagamento">
      <div className='ti'><h2>Pagamento</h2>
      </div>
      <Link to="/">
                <img className='botao-voltar100' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
            </Link>
            
            
      <article>  
      <div className="bordatrasparente">
        <div>
          <button className='pessoafisica'>PESSOA FÍSICA</button>
          <h1 className='h1'>*CAMPO OBRIGATÓRIO </h1>
        </div>

        <Pagamento />

        <button className='finalizar' onClick={handleClick}>Finalizar</button>
      </div>
      </article>
    </header>
    </article>
  );
}


