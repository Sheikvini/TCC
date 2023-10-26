import React, { useState } from 'react';
import './emailesenha.scss';


export default function Emailesenha() {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');


  return (
    <div className='caixinha2'>
      

        <div className='email'>
        <input 
          type="email"
          placeholder="*Email"
          value={email}
          onChange={e => setEmail (e.target.value)}

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
          value={senha}
          onChange={e => setSenha (e.target.value)}
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
      
    </div>
  );
}