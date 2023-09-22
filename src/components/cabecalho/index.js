import React, { useState } from 'react';
import "./index.scss"
import { Link } from 'react-router-dom';
const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const [ValorSelecionado, setValorSelecionado] = useState('');
  const handleSelecaoChange = (event) =>
    {
      setValorSelecionado(event.target.value);
    };

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
            value={searchValue}
            onChange={handleInputChange}
            />
          <button onClick={handleSearch}></button>
        </div>

       <div>
        <button>
            <img></img>
        </button>

        <button>
            <img src="/assets/img/icon/icon-cab.png"></img>
        </button>
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

        <a className='sp'>Selecione um Produto</a>
        <a className='sn'>Sobre nós</a>
      </section>

    </header>
  );
}

export default Header;