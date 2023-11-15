import './index.scss';

import React, {useContext, useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho-semrotas/index.js';
import axios from 'axios';
import { url } from '../../apiURL';


const CadastroProduto = () => {

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [promocao, setPromocao] = useState('');
  const [estoque, setEstoque] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [disponivel, setDisponivel] = useState('');
  const [fabricante, setFabricante] = useState('');
  const [recomendacao, setRecomendacao] = useState('');
  const [validade, setValidade] = useState('');
  const [categoria, setCategoria] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  

  async function entrar() {
    setCarregando(true);
    setErro('');

  let dados = {
    nome: nome,
    preco: preco,
    promocao: promocao,
    estoque: estoque,
    descricao: descricao,
    tipo: tipo,
    disponivel: disponivel,
    fabricante: fabricante,
    recomendacao: recomendacao,
    validade: validade,
    categoria: categoria
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

            <h2 className='txt-cadastro'>Novo Produto</h2>
        </section>    
      <article>  
      <div className="bordatrasparente">
        <div>
          <h1 className='h1'>*CAMPO OBRIGATÓRIO </h1>
        </div>
      
         <p>{erro}</p>

         <div className='caixinha'>        
        
        
        <section>
          <div className='nome'>
        
            <span>   
              <input
                type="text"
                placeholder="*Nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
              
              />

            </span>  
          </div> 
          
          <div className='preco'>
            <span>
            <input
                type="text"
                placeholder="*Preço"
                value={preco}
                onChange={e => setPreco(e.target.value)}
              
              />
            </span>  
          </div> 
        </section>
        <section>  
          <div className='Promoçao'>
              <span>  
                <input
                  type="text" 
                  placeholder="Promoçao"
                  value={promocao}
                  onChange={e => setPromocao(e.target.value)}
                />
              </span>  
          </div> 

          <div className='tipo'>
            <span>
              <input
                type="Number"
                placeholder="*Estoque"
                value={estoque}
                onChange={e => setEstoque (e.target.value)}
              />
              
            
            </span>    
          </div>
        </section>

        <section>
          <div className='Descrição'>
            <span>
              <input 
                type= 'text'
                placeholder="*Descrição"
                value={descricao}
                onChange={e => setDescricao (e.target.value)}
              />

            </span>
          </div>

          <div className='tipo'>
            <span>
            <input 
                type= 'text'
                placeholder="*Tipo"
                value={tipo}
                onChange={e => setTipo (e.target.value)}
              />
            
            </span>  
          </div>
        </section>  

        <section>
          <div className='cep1'>
            <span>  
            <select className='sexo'
                name="" 
                id=""
                value={disponivel}
                onChange={e=> setDisponivel(e.target.value)}>
                
                  <option>*Disponivel</option>
                  <option>true</option>
                  <option>false</option>
                  
                </select> 
            
             
              </span>
          </div>

          <div className='Fabricante'>
            <span>
              <input 
                type="text"
                placeholder="*Fabricante"
                value={fabricante}
                onChange={e => setFabricante (e.target.value)}
              />
              
            </span> 
          </div>
        </section>
      <section>
        <div className='Recomendação'>
        
          <span>  
            <input 
              type="text"
              placeholder="*Recomendação"
              value={recomendacao}
              onChange={e => setRecomendacao (e.target.value)}
            />
            
          </span>
        
        </div>
      
        <div className='Validade'>
      
          <span>    
            <input 
              type="date"
              placeholder="*Validade"
              value={validade}
              onChange={e=> setValidade(e.target.value)}
            />
            
          </span>
        </div>
      </section>

      <section>
        <div className='categoria'>
      
          <span>    
          <select className='sexo'
                name="" 
                id=""
                value={categoria}
                onChange={e=> setCategoria(e.target.value)}>
                
                  <option>Categoria</option>
                  <option>Internas</option>
                  <option>Externas</option>
                  <option>Grafite</option>
                </select> 
            </span>
          </div>
        </section>
      </div>
      
    
    
    
        <button className='finalizar' onClick={entrar}>Finalizar</button>
        </div>
      
      </article>
    </header>
    </article>
  );

}

export default CadastroProduto;