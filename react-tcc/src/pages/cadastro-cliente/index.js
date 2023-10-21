import './index.scss';
import Cadastrocliente from '../../components/cadastro/cadastrocliente.js';
import React, {useContext, useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Emailesenha from '../../components/emailsenha/emailesenha.js';
import Cabecalho from '../../components/cabecalho-semrotas/index.js';
import axios from 'axios';

const Cadastro = () => {

  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  

  async function entrar() {
    setCarregando(true);
    setErro('');

  

  try {
    const response = await axios.post('http://localhost:5000/cadastro');

    if( response.status === 204 ) {
      navigate('/');
    }
  } catch (err) {
    if(err.response) {
      setErro(err.response.data.erro)
    } else {
      setErro(err.erro.erro)
    }
    
  }
}
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
        <p>{erro}</p>
         

        <Cadastrocliente />
        <Emailesenha />

        <button onClick={entrar}>Finalizar</button>
        
      </div>
      </article>
    </header>
    </article>
  );

}

export default Cadastro;