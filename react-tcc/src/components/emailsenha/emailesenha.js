import React, { useState } from 'react';
import './emailesenha.scss';


export default function Emailesenha() {
  const [info12, setInfo12] = useState('');
  const [info13, setInfo13] = useState('');

  const handleInfo12Change = (event) => {
    setInfo12(event.target.value);
  };

  const handleInfo13Change = (event) => {
    setInfo13(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='caixinha2'>
      <form onSubmit={handleSubmit}>

        <div className='email'>
        <input 
          type="email"
          placeholder="*Email"
          value={info12}
          onChange={handleInfo12Change}

        />
<button >
          <img
            src= 'assets/img/icon/alterar_icone.png'
            alt="Alterar"
            width="10"
            height="10"

          />
        </button>
</div>

<div className='senha'>
        <input 
          type="password"
          placeholder="*Senha"
          value={info13}
          onChange={handleInfo13Change}
        />
<button >
          <img
            src= 'assets/img/icon/alterar_icone.png'
            alt="Alterar"
            width="10"
            height="10"

          />
        </button>
</div>
      </form>
    </div>
  );
}