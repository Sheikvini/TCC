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
    <Cabecalho/>
    <header className="cadastro">
      <section className='princ-cadastro'>
            <Link to="/login">
                <img className='botao-voltar1-cad' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
            </Link>

            <h2 className='txt-cadastro'>Cadastro</h2>
        </section>    
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


