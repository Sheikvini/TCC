import './index.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Cabecalho from '../../components/cabecalho-semrotas'

const Login = ({ onSearch }) => {
    
    const [valorInput1, setValorInput1] = useState('');
    const [valorInput2, setValorInput2] = useState('');
    
      // Funções para lidar com a mudança nos inputs
      const handleChangeInput1 = (e) => {
        setValorInput1(e.target.value);
      };
    
      const handleChangeInput2 = (e) => {
        setValorInput2(e.target.value);
        };
    


    

    return(
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
                
                <a href="URL_DE_AUTORIZACAO" class="google-login-button">
                <img  className='google' src="/assets/img/icon/google.png" alt="Login com o Google"/>
                </a>

                <span>
                    <h4> Email:</h4>
                    
                    <div className="caixa-text">
                        
                        <input
                           
                           placeholder="Insira seu email aqui..."
                           type="text"
                           value={valorInput1}
                           onChange={handleChangeInput1}
                       />
                            
                    </div>  

                    <h4>Senha:</h4>

                    <div className="caixa-text2">
                        
                        <input
                            placeholder="Digite sua senha"
                            type="password"
                            value={valorInput2}
                            onChange={handleChangeInput2}
                        />
                    </div>

                    <a className='esq-senha'>
                        Esqueci minha senha
                    </a>    
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
    );
}

export default Login;

