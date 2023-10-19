import React, { useState } from 'react';
import './cadastrocliente.scss';


export default function Cadastrocliente() {
  const [info1, setInfo1] = useState('');
  const [info2, setInfo2] = useState('');
  const [info3, setInfo3] = useState('');
  const [info4, setInfo4] = useState('');
  const [info5, setInfo5] = useState('');
  const [info6, setInfo6] = useState('');
  const [info7, setInfo7] = useState('');
  const [info8, setInfo8] = useState('');
  const [info9, setInfo9] = useState('');
  const [info10, setInfo10] = useState('');
  const [info11, setInfo11] = useState('');
  const [info12, setInfo12] = useState('');


  const handleInfo1Change = (event) => {
    setInfo1(event.target.value);
  };

  const handleInfo2Change = (event) => {
    setInfo2(event.target.value);
  };

  const handleInfo3Change = (event) => {
    setInfo3(event.target.value);
  };

  const handleInfo4Change = (event) => {
    setInfo4(event.target.value);
  };

  const handleInfo5Change = (event) => {
    setInfo5(event.target.value);
  };

  const handleInfo6Change = (event) => {
    setInfo6(event.target.value);
  };

  const handleInfo7Change = (event) => {
    setInfo7(event.target.value);
  };

  
  const handleInfo8Change = (event) => {
    setInfo8(event.target.value);
  };

  const handleInfo9Change = (event) => {
    setInfo9(event.target.value);
  };

  const handleInfo10Change = (event) => {
    setInfo10(event.target.value);
  };

  const handleInfo11Change = (event) => {
    setInfo11(event.target.value);
  };

  const handleInfo12Change = (event) => {
    setInfo12(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className='caixinha'>        
        <form onSubmit={handleSubmit}>
        
        <section>
          <div className='nome'>

            <span>   
              <input
                type="text"
                placeholder="*Nome completo"
                value={info1}
                onChange={handleInfo1Change}
              
              />

              <button >
                <img
                  src= 'assets/img/icon/alterar_icone.png'
                  alt="Alterar"
                  width="10"
                  height="10"

                />
              </button>
            </span>  
          </div> 
        
          <div className='sexo'>
            <span>
              <input
                type="text"
                placeholder="*Sexo"
                value={info2}
                onChange={handleInfo2Change}
              />
          
              <button >
                <img
                  src= 'assets/img/icon/alterar_icone.png'
                  alt="Alterar"
                  width="10"
                  height="10"

                />
              </button>
            </span>  
          </div> 
        </section>
        
        <section>  
          <div className='datadenascimento'>
              <span>  
                <input  className='Datadenascimento'
                  type="date" 
                  placeholder="*Data de nascimento"
                  value={info3}
                  onChange={handleInfo3Change}
                />
              </span>  
          </div> 

          <div className='cpf1'>
            <span>
              <input
                type="text"
                placeholder="*CPF"
                value={info4}
                onChange={handleInfo4Change}
              />
              
              <button >
                <img
                  src= 'assets/img/icon/alterar_icone.png'
                  alt="Alterar"
                  width="10"
                  height="10"

                  />
              </button>
            </span>    
          </div>
        </section>

        <section>
          <div className='telefone1'>
            <span>
              <input 
                type="text"
                placeholder="*Seu telefone"
                value={info5}
                onChange={handleInfo5Change}
              />
              <button >
                <img
                  src= 'assets/img/icon/alterar_icone.png'
                  alt="Alterar"
                  width="10"
                  height="10"

                />
              </button>
            </span>
          </div>

          <div className='tpendereco'>
            <span>
              <input
                type="text"
                placeholder="*Tipo de endereço"
                value={info6}
                onChange={handleInfo6Change}
              />
              <button >
                <img
                  src= 'assets/img/icon/alterar_icone.png'
                  alt="Alterar"
                  width="10"
                  height="10"

                />
              </button>
            </span>  
          </div>
        </section>  

        <section>
          <div className='cep1'>
            <span>  
              <input 
                type="text"
                placeholder="*CEP"
                value={info7}
                onChange={handleInfo7Change}
              />
            
              <button >
                <img
                  src= 'assets/img/icon/alterar_icone.png'
                  alt="Alterar"
                  width="10"
                  height="10"
                />
                </button>
              </span>
          </div>

          <div className='neomplemento'>
            <span>
              <input 
                type="text"
                placeholder="*N° e complemento"
                value={info8}
                onChange={handleInfo8Change}
              />
              <button >
                <img
                  src= 'assets/img/icon/alterar_icone.png'
                  alt="Alterar"
                  width="10"
                  height="10"
                />
              </button>
            </span> 
          </div>
        </section>
      <section>
        <div className='nomerua'>
        
          <span>  
            <input 
              type="text"
              placeholder="*Nome da rua"
              value={info9}
              onChange={handleInfo9Change}
            />
            <button >
              <img
                src= 'assets/img/icon/alterar_icone.png'
                alt="Alterar"
                width="10"
                height="10"
              />
            </button>
          </span>
        
        </div>
      
        <div className='bairro'>
      
          <span>    
            <input 
              type="text"
              placeholder="*Bairro"
              value={info10}
              onChange={handleInfo10Change}
            />
            <button >
              <img
                src= 'assets/img/icon/alterar_icone.png'
                alt="Alterar"
                width="10"
                height="10"
              />
            </button>
          </span>
        </div>
      </section>

      <section>
        <div className='cidade'>
      
          <span>    
            <input 
              type="text"
              placeholder="*Cidade"
              value={info11}
              onChange={handleInfo11Change}
            />
            <button >
              <img
                src= 'assets/img/icon/alterar_icone.png'
                alt="Alterar"
                width="10"
                height="10"
              />
            </button>
          </span>
        </div>
      
        <div className='estado'>
      
          <span>    
            <input 
              type="text"
              placeholder="*Estado"
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
          </span>
        </div>
      </section>

      </form>
    </div>
  );
}