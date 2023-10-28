import './index.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useContext,useState } from 'react';
import Cabecalho from '../../components/cabecalho-semrotas'
import axios from 'axios';
import { LoginContext } from '../../context';
const Loginadm = () => {
    
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);    

    const navigate = useNavigate();

        async function entrar() {
          setCarregando(true);
          setErro('');

          let useradm = {
            usuario: usuario,
            senha: senha
          }

            try {
              const response = await axios.post('http://localhost:5000/loginAdm', useradm);
        
              if (response.status === 204) {
                navigate('/adm');
            }  
          } 
          
          catch (err) {
              
            if(err.response) { 
              setErro(err.response.data.erro);
            }

            else {
              setErro(err.erro.erro)
            }
          }
        }

    return(
        <article className='cont-cadastro'>
          
        <header className='cont-login-adm'>
            <Link to="/">
                <img className='botao-voltar2' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
            </Link>
            <section className='log-adm'>
                <div className='titulos-login-adm'>
                    <img className='logo' src='/assets/img/logo.png'/>
            

                
                    <h2>Colors Rain</h2>
                    <h3>Bem Vindo administrador </h3>
                </div>

                <span>
                    <h4 className='email-adm'>Usuário:</h4>
                    
                    <div className="caixa-text-adm">
                        
                        <input
                            placeholder="Insira seu usuário aqui..."
                            type="text"
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                        />
                            
                    </div>  

                    <h4>Senha:</h4>

                    <div className="caixa-text2-adm">
                        
                        <input
                            placeholder="Digite sua senha"
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>
      
                    <button onClick={entrar}>Entrar</button>
                     <p>{erro}</p>
                </span>


            </section>
            
        </header>
        </article>
    );
  
}

export default Loginadm;