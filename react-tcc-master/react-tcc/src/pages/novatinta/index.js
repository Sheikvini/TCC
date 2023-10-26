import Cabecalho from "../../components/cabecalho";
import './index.scss'
import React, { useState } from 'react';

export default function Novatinta() {
  const [info1, setInfo1] = useState('');
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

  const handleInfo1Change = (event) => {
    setInfo1(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInfo2Change = (event) => {
    setInfo2(event.target.value);
  };

  const handleInfo3Change = (event) => {
    setInfo3(event.target.value);
  };

  const handleInfo4Change = (event) => {
    setInfo4(event.target.value);
  };

  const handleInfo5Change = (event) => {
    setInfo5(event.target.value);
  };

  const handleInfo6Change = (event) => {
    setInfo6(event.target.value);
  };

  const handleInfo7Change = (event) => {
    setInfo7(event.target.value);
  };

  const handleInfo8Change = (event) => {
    setInfo8(event.target.value);
  };

  const handleInfo9Change = (event) => {
    setInfo9(event.target.value);
  };

  const handleInfo10Change = (event) => {
    setInfo10(event.target.value);
  };



  return (

    <div className="global-nt">
      <Cabecalho />
      
      
      <div className="contt-nt">
      <h3>Novo Produto</h3>

      <p>Imagem do produto:</p>
        <input className="arquivo-nt"
          type="file"
          value={info1}
          onChange={handleFileChange}
        />


      <p className="aaa">Estoque:</p>
      <input
        type="text"
        value={info2}
        onChange={handleInfo2Change}
      />

      <p>Cores:</p>
      <input
        type="text"
        value={info3}
        onChange={handleInfo3Change}
      />

      <p>Nome:</p>
      <input
        type="text"
        value={info4}
        onChange={handleInfo4Change}
      />

      <p>Tipo:</p>
      <input
        type="text"
        value={info5}
        onChange={handleInfo5Change}
      />

      <p>Descrição:</p>
      <input
        type="text"
        value={info6}
        onChange={handleInfo6Change}
      />

      <p> Fabricante:</p>
      <input
        type="text"
        value={info7}
        onChange={handleInfo7Change}
      />

    <p> Preço:</p>
      <input
        type="text"
        value={info8}
        onChange={handleInfo8Change}
      />

    <p> Porcentagem de desconto:</p>
      <input
        type="text"
        value={info9}
        onChange={handleInfo9Change}
      />

    <p> Porcentagem de desconto:</p>
      <input
        type="text"
        value={info10}
        onChange={handleInfo10Change}
      />

      <button className="cadastrar-nt"> Cadastrar </button>
    </div>
    </div>
  
  );
}
