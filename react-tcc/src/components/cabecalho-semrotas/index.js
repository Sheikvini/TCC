import React, { useState,useEffect } from 'react';
import "./index.scss"
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import axios from 'axios'
import { url } from '../../constants';


const Cabecalho = () => {
    
  const [pesquisa, setPesquisa] = useState('');
  const [usuario,setUsuario  ] = useState('');
  const [nome,setNome] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!storage('usuario-logado')){
        navigate('/login');
    }
    else{
      const usuariologado = storage('usuario-logado')
      setUsuario(usuariologado.email)
      }
    }, [])

    

async function pesquisarProduto(e) {
  if(e.key === 'Enter'){
    const resp = await axios.get(url +`/pesquisa/${pesquisa}`)
    const produto = resp.data
    console.log(produto);
    navigate(`/detalhes-produtos/${produto.id_produto}`)
  }
  

}

  return (
    <header className="principal-sn">
      
      <section className='cont-sn'>
        <Link to="/">
          <img src="/assets/img/logo.png" alt="Voltar" />
        </Link>
        

       <div>
        <button>
            <img></img>
        </button>
        <section className='car-usu'>

<Link to='/carrinho'>
    <img className='C' src="/assets/img/icon/imagecarrinho.png"></img>
</Link>
<Link className='icon-usuario' to='/perfil'>
    <img className='M' src="/assets/img/icon/imageadm.png"></img>

    <p className='nome-usuario'>{usuario}</p>
                      
</Link>
</section>
       </div>
      </section>

      <section className='paginas-sn'>
        <hr className='vermelho-sn' />
        <hr className='roxo-sn'/>
        <hr className='verde-sn'/>
        <hr className='rosa-sn'/>
      </section>

    </header>
  );
};

export default Cabecalho;