import React, { useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { url } from '../../constants';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Pagamento(props) {

  const [nome, setNome] = useState('');
  const [nascimento, setNasciemento] = useState('');
  const [formadepagamento, setFormadepagamento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tpendereco, setTpendereco] = useState('');
  const [cep, setCep] = useState('');
  const [necomplemento, setNecomplemento] = useState('');
  const [nomerua, setNomerua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [numerocartao, setNumerocartao] = useState('');
  const [vencimento, setVencimento] = useState('');
  const [cvc, setCvc] = useState('');
  const [erro, setError] = useState('');
  const navigate = useNavigate();




  async function pagar() {
    // let dados = {
      //   nome: nome,
      //   nascimento: nascimento,
      //   formadepagamento: formadepagamento,
      //   cpf: cpf,
      //   telefone: telefone,
    //   tpendereco: tpendereco,
    //   cep: cep,
    //   necomplemento: necomplemento,
    //   nomerua: nomerua,
    //   bairro: bairro,
    //   cidade: cidade,
    //   estado: estado,
    //   parcelas: parcelas,
    //   numerocartao: numerocartao,
    //   vencimento: vencimento,
    //   cvc: cvc
    // }
    
    try {
      
      if (!nome)
        throw new Error('⚠ Nome obrigatório');
  
           if (!nascimento)
          throw new Error('⚠ Nascimento obrigatório');
  
           if (!formadepagamento)
          throw new Error('⚠ Forma de Pagamento obrigatório');
  
           if (!cpf)
          throw new Error('⚠ CPF obrigatório');
    
           if (!telefone)
          throw new Error('⚠ Telefone obrigatório');
  
          if (!tpendereco)
          throw new Error('⚠ Tipo de Endereço obrigatório');
  
           if (!cep)
          throw new Error('⚠ CEP obrigatório');
  
           if (!necomplemento)
          throw new Error('⚠ N° Complemento obrigatório');
  
          if (!nomerua)
          throw new Error('⚠ Nome da Rua obrigatório');
  
           if (!bairro)
          throw new Error('⚠ Bairro obrigatória');
  
           if (!cidade)
          throw new Error('⚠ Cidade obrigatório');
  
           if (!estado)
          throw new Error('⚠ Estado obrigatória');
  
           if (!parcelas)
          throw new Error('⚠ Parcelas obrigatórias');
  
           if (!numerocartao)
          throw new Error('⚠ Número do Cartão obrigatório');
  
          if (!vencimento)
          throw new Error('⚠Vencimento obrigatório');
  
          if (!cvc)
          throw new Error('⚠ CVC do Cartão obrigatório');
      
        else
          props.concluido(true)
        
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.erro)
      } else {
        toast.error(err.message)
      }

    }

  }


  return (
    <div className='caixinha2'>
      <ToastContainer />

      <section>
        <div className='nome'>

          <span>
            <input
              type="text"
              placeholder="*Nome completo"
              value={nome}
              onChange={e => setNome(e.target.value)}

            />
          </span>
        </div>


        <div className='datadenascimento'>
          <span>
            <input className='Datadenascimento'
              type="date"
              placeholder="*Data de nascimento"
              value={nascimento}
              onChange={e => setNasciemento(e.target.value)}
            />

          </span>
        </div>
      </section>

      <section>
        <div className='formadepagamento'>
          <span>
            <select className='formadepagamento'
              name=""
              id=""
              value={formadepagamento}
              onChange={e => setFormadepagamento(e.target.value)}>
              <option>Forma de pagamento</option>
              <option>Débito</option>
              <option>Crédito</option>

            </select>

          </span>
        </div>


        <div className='cpf1'>
          <span>
            <input
              type="text"
              placeholder="*CPF"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />


          </span>
        </div>
      </section>

      <section>
        <div className='telefone1'>
          <span>
            <input
              type="number"
              placeholder="*Seu telefone"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
            />

          </span>
        </div>

        <div className='tpendereco'>
          <span>
            <select className='sexo'
              name=""
              id=""
              value={tpendereco}
              onChange={e => setTpendereco(e.target.value)}>

              <option>Tipo de endereço</option>
              <option>Residencial</option>
              <option>Comercial</option>

            </select>

          </span>
        </div>
      </section>

      <section>
        <div className='cep1'>
          <span>
            <input
              type="number"
              placeholder="*CEP"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />


          </span>
        </div>

        <div className='necomplemento'>
          <span>
            <input
              type="text"
              placeholder="*N° e complemento"
              value={necomplemento}
              onChange={e => setNecomplemento(e.target.value)}
            />

          </span>
        </div>
      </section>
      <section>
        <div className='nomerua'>

          <span>
            <input
              type="text"
              placeholder="*Nome da rua"
              value={nomerua}
              onChange={e => setNomerua(e.target.value)}
            />

          </span>

        </div>

        <div className='bairro'>

          <span>
            <input
              type="text"
              placeholder="*Bairro"
              value={bairro}
              onChange={e => setBairro(e.target.value)}
            />

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
              onChange={e => setCidade(e.target.value)}
            />

          </span>
        </div>

        <div className='estado'>

          <span>
            <input
              type="text"
              placeholder="*Estado"
              value={estado}
              onChange={e => setEstado(e.target.value)}
            />

          </span>
        </div>
      </section>

      <section>
        <div className='parcelas'>

          <span>
            <select className='parcelas'
              name=""
              id=""
              value={parcelas}
              onChange={e => setParcelas(e.target.value)}>

              <option>*Quantidade de parcelas</option>
              <option>1x</option>
              <option>2x</option>
              <option>3x</option>
              <option>4x</option>
              <option>5x</option>

            </select>

          </span>
        </div>

        <div className='numerocartao'>

          <span>
            <input
              type="number"
              placeholder="*N° do cartão"
              value={numerocartao}
              onChange={e => setNumerocartao(e.target.value)}
            />

          </span>
        </div>
      </section>

      <section>
        <div className='vencimento'>

          <span>
            <input
              type="number"
              placeholder="*Vencimento"
              value={vencimento}
              onChange={e => setVencimento(e.target.value)}
            />

          </span>
        </div>

        <div className='cvc'>

          <span>
            <input
              type="number"
              placeholder="*CVC"
              value={cvc}
              onChange={e => setCvc(e.target.value)}
            />

    

          </span>
          
        </div>
      </section>
      <button className='finalizar' onClick={() => pagar()}>Finalizar</button>

    </div>
  );
}