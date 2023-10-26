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

  return (
    <header className="principal-sn">
      
      <section className='cont-sn'>
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

        <Link to='/carrinho'>
            <img className='C' src="/assets/img/icon/imagecarrinho.png"></img>
        </Link>
        <Link to='/'>
            <img className='M' src="/assets/img/icon/imageadm.png"></img>
        </Link>

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

export default Header;