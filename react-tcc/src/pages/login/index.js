import './index.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import Cabecalho from '../../components/cabecalho-semrotas'
import axios from 'axios';
import { LoginContext } from '../../context';
import { url } from '../../constants';

const Login = () => {
    
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  

  async function Entrar() {
    setCarregando(true);
    setErro('');

    let user = {
      email: email,
      senha: senha
  }

    try {
      let response = await axios.post(url + '/login', user);

      if( response.status === 200 ) {
        localStorage.setItem('usuario-logado', JSON.stringify(response.data))
        navigate('/');
      }
    } 
    catch (err) {
      
      if(err.response) {
        setErro(err.response.data.erro)
      } 
      else {
        setErro(err.erro.erro)
      }
      
    }
  }


    return(
        <article className='cont-cadastro'>
           
        <header className='cont-login'>
           
        
            <Link to="/">
                <img className='botao-voltar' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
            </Link>
            
            <section className='log'>
                <div className='titulos-login'>
                    <img className='logo' src='/assets/img/logo.png'/>
            

                
                    <h2>Colors Rain</h2>
                    <h3>Bem Vindo a nossa chuva de cores </h3>
                </div>

                <span>
                    <h4> Usuário:</h4>
                    
                    <div className="caixa-text">
                        
                        <input
                           
                           placeholder="Insira seu usuário aqui..."
                           type="text"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                       />
                            
                    </div>  

                    <h4>Senha:</h4>

                    <div className="caixa-text2">
                        
                        <input
                            placeholder="Digite sua senha"
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>

                    
                     <button onClick={Entrar}>Entrar</button>
                    <p className='er'>{erro}</p>
                </span>
                
      

                <div className='n-conta'>
                    <p>Não possuí uma conta?</p>
                   <Link to={'/login-cadastro'}>Crie agora</Link>
                </div>
            </section>
            
        </header>
        </article>
    );
}

export default Login;

