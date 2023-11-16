import Cabecalho from "../../components/cabecalho"
import "./index.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../../apiURL"
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';

export default function Perfil() {
    const [pesquisa, setPesquisa] = useState('');
    const [usuario,setUsuario  ] = useState('');
    const [usuario1,setUsuario1 ] = useState('');
    const [nome,setNome] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
      if(!storage('usuario-logado')){
          navigate('/login');
      }
      else{
        const usuariologado = storage('usuario-logado')
        setUsuario(usuariologado.email)

        console.log(usuariologado)
        }
      }, [])
    
    function sair(){
        storage.remove('usuario-logado');
        navigate('/');
      }

    return(
        <article className="container-perfil">
           <Cabecalho/>
           
           <section className="subcontainer-perfil">
           <div className="profile">
                <img className="Pp" src="/assets/img/icon/popo.png" alt="" />
                
        
                <div className="botao-sair-perfil">       
                    <button className="sair-perfil" onClick={sair}>Sair</button>
                </div>

                <div className="info-pessoais">
                   <input type="text" placeholder={usuario} />
                   <p>{usuario}</p>
                </div>

           </div>
           </section> 
        </article>
    )
}