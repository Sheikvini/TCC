import React, { useState } from 'react';
import "./index.scss"
import { Link } from 'react-router-dom';


const Cabecalho = () => {
    
  const [pesquisa, setPesquisa] = useState('');


   async function Pesquisa () {

    let url = `http://localhost:5032/produto/pesquisa/:pesquisa`

    

  } 

  return (
    <header className="principal">
      
      <section className='cont'>
        <Link to="/">
          <img src="/assets/img/logo.png" alt="Voltar" />
        </Link>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquise Aqui..."
            value={pesquisa}
            onChange={e => setPesquisa(e.target.value)}
            />
          <button ></button>
        </div>

       <div>
        <button>
            <img></img>
        </button>

        <Link to='/carrinho'>
            <img className='C' src="/assets/img/icon/imagecarrinho.png"></img>
        </Link>
        <Link to='/'>
            <img className='M' src="/assets/img/icon/imageadm.png"></img>
        </Link>
       
       </div>
      </section>

      <section className='paginas'>
        <hr className='vermelho' />
        <hr className='roxo'/>
        <hr className='verde'/>
        <hr className='rosa'/>
      </section>

      <section className='sub-menu'>
        <a className='h' href='/'>Home</a>
        <a className='p' href='/login'>login</a>
        <a className='sp' href='/sobrenos'>Sobre nós</a>
        <a className='sn' href='/termosdeuso'>Termos de Uso </a>
      </section>

    </header>
  );
}


export default Cabecalho;