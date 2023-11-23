import React, { useState,useEffect } from 'react';
import "./index.scss"
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import axios from 'axios'
import { url } from '../../constants';


const Cabecalho1 = () => {
    
  const [pesquisa, setPesquisa] = useState('');
  const [usuario,setUsuario  ] = useState('');
  const [nome,setNome] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!storage('usuario-logado')){
        navigate('/login');
    }
    else{
      const usuariologado = storage('usuario-logado')
      setUsuario(usuariologado.email)
      }
    }, [])

  return (
    <header className="principal-sn">
      
      <section className='cont-sn'>
        <Link to="/">
          <img src="/assets/img/logo.png" alt="Voltar" />
        </Link>
        

        <div>
        <button>
            <img></img>
        </button>

      <section className='car-usu1'>

        <Link to='/carrinho'>
            <img className='C1' src="/assets/img/icon/imagecarrinho.png"></img>
        </Link>
        <Link className='icon-usuario1' to='/perfil'>
            <img className='M1' src="/assets/img/icon/imageadm.png"></img>

            <p className='nome-usuario1'>{usuario}</p>
                              
        </Link>
        </section>
       </div>
      </section>

      <section className='paginas-sn'>
        <hr className='vermelho-sn' />
        <hr className='roxo-sn'/>
        <hr className='verde-sn'/>
        <hr className='rosa-sn'/>
      </section>

    </header>
  );
};

export default Cabecalho1;