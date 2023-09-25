import './index.scss';
import Cadastrocliente from '../../components/cadastro/cadastrocliente.js';
import React from 'react';
import { Link } from 'react-router-dom';
import Emailesenha from '../../components/emailsenha/emailesenha.js';
import Cabecalho from '../../components/cabecalho-semrotas/index.js';

export default function Cadastro() {
  const handleClick = () => {
    
    alert('Botão "Finalizar" clicado!');
  };

  return (
<article className='cont-cadastro'>

    <header className="cadastro">
      
            <Link to="/login">
                <img className='botao-voltar1' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
            </Link>
      <article>  
      <div className="bordatrasparente">
        <div>
          <button className='pessoafisica'>PESSOA FÍSICA</button>
          <h1 className='h1'>*CAMPO OBRIGATÓRIO </h1>
        </div>

        <Cadastrocliente />
        <Emailesenha />

        <button className='finalizar' onClick={handleClick}>Finalizar</button>
      </div>
      </article>
    </header>
    </article>
  );
}


