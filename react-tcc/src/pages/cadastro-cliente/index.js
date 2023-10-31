import './index.scss';

import React, {useContext, useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho-semrotas/index.js';
import axios from 'axios';
import { url } from '../../apiURL';

const Cadastro = () => {

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
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  

  async function entrar() {
    setCarregando(true);
    setErro('');

  let dados = {
    nome: nome,
    sex: sex,
    nascimento: nascimento,
    cpf: cpf,
    telefone: telefone,
    tipo_endereco: tipo_endereco,
    cep: cep,
    numero_complemento: numero_complemento,
    rua: rua,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    email: email,
    senha: senha,
  }

  try {
    const response = await axios.post(url + '/cadastro', dados);

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
    
    <div className='caixinha2'>
      
      <div className='email'>
      <input 
        type="email"
        placeholder="*Usuário"
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
    
        <button className='finalizar' onClick={entrar}>Finalizar</button>
        
      </div>
      </article>
    </header>
    </article>
  );

}

export default Cadastro;