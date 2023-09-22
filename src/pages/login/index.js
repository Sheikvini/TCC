import './index.scss';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import Cabecalho from '../../components/cabecalho-semrotas'
import axios from 'axios';
import { LoginContext } from '../../context';
const Login = () => {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
      // Funções para lidar com a mudança nos inputs
      const handleChangeInput1 = (e) => {
        setEmail(e.target.value);
      };
    
      const handleChangeInput2 = (e) => {
        setSenha(e.target.value);
        };
        

        const loginContext = useContext(LoginContext);

        async function entrar() {
            try {
              const response = await axios.post('http://localhost:5000/login', {
                email,
                senha,
              });
        
              if (response.status === 200) {
                loginContext.logar();
                window.location.href = 'http://localhost:3000/';
              } else {
                setMessage('⚠ Login ou senha incorretos');
              }
            } catch (error) {
              console.error('⚠ Erro ao verificar as credenciais:', error);
              setMessage('⚠ Erro ao verificar as credenciais. Tente novamente mais tarde.');
            }
          }

    return(
        <article className='cont-cadastro'>
            <Cabecalho/>
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
                    <h4> Email:</h4>
                    
                    <div className="caixa-text">
                        
                        <input
                           
                           placeholder="Insira seu email aqui..."
                           type="text"
                           value={email}
                           onChange={handleChangeInput1}
                       />
                            
                    </div>  

                    <h4>Senha:</h4>

                    <div className="caixa-text2">
                        
                        <input
                            placeholder="Digite sua senha"
                            type="password"
                            value={senha}
                            onChange={handleChangeInput2}
                        />
                    </div>

                    <a className='esq-senha'>
                        Esqueci minha senha
                    </a>   
                     <button onClick={entrar}>Entrar</button>
                     <p>{message}</p>
                </span>

                
                <div className='req-senha'>
                    <p>Requisitos para senha:</p>
                    <li>Pelo menos uma leta maiúscula</li>
                    <li>Mínino de 8 caracteres</li>
                </div>

                <div className='n-conta'>
                    <p>Não possuí uma conta?</p>
                    <a href='/login-cadastro'>Crie agora</a>
                </div>
            </section>
            
        </header>
        </article>
    );
}

export default Login;

