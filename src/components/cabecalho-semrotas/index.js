import React, { useState } from 'react';
import "./index.scss"

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <header className="principal">
      
      <section className='cont'>
        <img src='../assets/img/logo.png'></img>
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

    </header>
  );
};

export default Header;