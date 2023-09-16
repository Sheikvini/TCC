import Cabecalho from '../components/cabecalho'
import './home.scss';
import React from 'react';
import Rodape from '../components/rodape';

export default function Home() {
  return (

    <header className="Home">
      <Cabecalho />

      <div className="inicial">
        <h1>Colors Rain</h1>
        <h5>UMA CHUVA DE VARIEDADES</h5>
        <p>Variedades de tintas com o melhor  preço do mercado, para todos os tipos de ambientes.</p>
        <button>Saiba mais</button>
      </div>

      <section className='marcas'>
        <img src='/assets/img/marcas1.png'></img>
        <img src='/assets/img/marcas2.png'></img>
        <img src='/assets/img/marcas3.png'></img>
        <img src='/assets/img/marcas4.png'></img>
        <img src='/assets/img/marcas5.png'></img>
      </section>

      <section className='faixas'>
        <div className='azul'>

          <div>
            <h1>Colors QUIZ</h1>
            <p>Descubra mais sobre tintas e ambientes com o nosso quiz</p>
            <img src='/assets/img/balde.png'></img>
          </div>
          <div>
            <button>QUIZ</button>
            <p></p>
            <img src='/assets/img/balde.png'></img>
          </div>
        </div>

        <div className='internas'>
         <div>
            <h1>Tintas Internas</h1>
            <p>Descubra as melhores indicações para o seu ambiente interno</p>
            <button>Saiba Mais</button>
            <p></p>
          </div>
         
          
         
        </div>
        
        <div className='externas'>
         <div>
            <h1>Tintas Externas</h1>
            <p>Descubra as melhores indicações para o seu ambiente externos</p>
            <button>Saiba Mais</button>
            <p></p>
          </div>
         
        </div>
        
        <div className='grafite'>
         <div className='grafit'>
            <img className= 'lata' src='../assets/img/icon/lata.png'></img>
            <div className='g'>  
              <h1>Street Art</h1>
              <p>O grafite é uma forma de expressar a arte e os seus movimentos, explorando a vida por meio das cores</p>
              <button>Saiba Mais</button>
            </div>  
            <img className='adesivo' src='../assets/img/adesivo-g.png'></img>
          </div>
         <p className='p'>APENAS ARTE, NÃO VANDALISMO</p>
        </div>
        

      </section>
      <Rodape/>
    </header>
  )
}


