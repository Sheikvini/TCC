import Cabecalho from "../../components/cabecalho";
import './index.scss'
import React, { useState } from 'react';

export default function Novatinta() {
  const [img, setImg] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [info2, setInfo2] = useState('');
  const [info3, setInfo3] = useState('');
  const [info4, setInfo4] = useState('');
  const [info5, setInfo5] = useState('');
  const [info6, setInfo6] = useState('');
  const [info7, setInfo7] = useState('');
  const [info8, setInfo8] = useState('');
  const [info9, setInfo9] = useState('');
  const [info10, setInfo10] = useState('');

  

  return (

    <div className="global-nt">
      <Cabecalho />
      
      
      <div className="contt-nt">
      <h3>Novo Produto</h3>

      <p>Imagem do produto:</p>

        <div className="capa-prod"> {/*{onClick={escolherimagem}
       
       {!img &&
        <img src="../assets/img/icon/upload.png"></img>
      }

      {!img &&
      <img className="imagem-capa" src= {mostrarImagem ()} alt=''/>
      } } */}


        <input className="arquivo-nt" 
          type="file" id="bt-envio" onChange={e=> setImg(e.target.files[0])}/>
        </div>


      <p className="aaa">Estoque:</p>
      <input
        type="text"
        value={info2}
        onChange={e => setInfo2(e.target.value)}
      />

      <p>Cores:</p>
      <input
        type="text"
        value={info3}
        onChange={e => setInfo3(e.target.value)}
      />

      <p>Nome:</p>
      <input
        type="text"
        value={info4}
        onChange={e => setInfo4(e.target.value)}
      />

      <p>Tipo:</p>
      <input
        type="text"
        value={info5}
        onChange={e => setInfo5(e.target.value)}
      />

      <p>Descrição:</p>
      <input
        type="text"
        value={info6}
        onChange={e => setInfo6(e.target.value)}
      />

      <p> Fabricante:</p>
      <input
        type="text"
        value={info7}
        onChange={e => setInfo7(e.target.value)}
      />

    <p> Preço:</p>
      <input
        type="text"
        value={info8}
        onChange={e => setInfo8(e.target.value)}
      />

    <p> Porcentagem de desconto:</p>
      <input
        type="text"
        value={info9}
        onChange={e => setInfo9(e.target.value)}
      />

    <p> Porcentagem de desconto:</p>
      <input
        type="text"
        value={info10}
        onChange={e => setInfo10(e.target.value)}
      />

      <button className="cadastrar-nt"> Cadastrar </button>
    </div>
    </div>
  
  );
}
