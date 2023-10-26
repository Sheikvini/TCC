import React, { useState } from 'react';
import './cadastrocliente.scss';


export default function Cadastrocliente() {
  const [nome, setNome] = useState('');
  const [sex, setSex] = useState('');
  const [nascimento, setNasciemento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipo_endereco, setTipo_endereco] = useState('');
  const [cep, setCep] = useState('');
  const [numero_complemento, setNumero_complemento] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

 

  return (
    <div className='caixinha'>        
        
        
        <section>
          <div className='nome'>
        
            <span>   
              <input
                type="text"
                placeholder="*Nome completo"
                value={nome}
                onChange={e => setNome(e.target.value)}
              
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
                value={sex}
                onChange={e => setSex(e.target.value)}
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
                  value={nascimento}
                  onChange={e => setNasciemento(e.target.value)}
                />
              </span>  
          </div> 

          <div className='cpf1'>
            <span>
              <input
                type="text"
                placeholder="*CPF"
                value={cpf}
                onChange={e => setCpf (e.target.value)}
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
                value={telefone}
                onChange={e => setTelefone (e.target.value)}
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
                value={tipo_endereco}
                onChange={e => setTipo_endereco (e.target.value)}
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
                value={cep}
                onChange={e => setCep (e.target.value)}
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
                value={numero_complemento}
                onChange={e => setNumero_complemento (e.target.value)}
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
              value={rua}
              onChange={e => setRua (e.target.value)}
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
              value={bairro}
              onChange={e=> setBairro(e.target.value)}
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
              value={cidade}
              onChange={e => setCidade (e.target.value)}
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
              value={estado}
              onChange={e => setEstado (e.target.value)}
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

     
    </div>
  );
}