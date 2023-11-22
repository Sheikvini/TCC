import './index.scss';
import Pagamento from '../../components/pagamento/index.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho-semrotas/index.js';
import { ToastContainer, toast } from 'react-toastify';
export default function Cagamento() {
  const [concluido, setConcluido] = useState(false)

  if(concluido)
    toast.success('Pedido concluído')

  return (
  
<article className='cont-cadastro'>
    <ToastContainer />
    <Cabecalho/>
    <header className="pagamento">
      <div className='ti'><h2>Pagamento</h2>
      </div>
      <Link to="/carrinho">
                <img className='botao-voltar100' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
            </Link>
            
            
      <article>  
      <div className="bordatrasparente">
        <div>
          <button className='pessoafisica'>PESSOA FÍSICA</button>
          <h1 className='h1'>*CAMPO OBRIGATÓRIO </h1>
        </div>

        <Pagamento concluido={setConcluido}/>


      </div>
      </article>
    </header>
    </article>
  );
}


