import Cabecalho from '../../components/cabecalho'
import './home.scss';
import React, { useEffect, useState } from 'react';
import Rodape from '../../components/rodape';
import { Element, scroller } from 'react-scroll'; // Importe o 'scroller' de 'react-scroll'
import { Link } from 'react-router-dom';

export default function Home() {

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
        scrollToContent();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  const scrollToContent = () => {
    scroller.scrollTo('content', {
      duration: 7000, // Ajuste a duração conforme necessário
      delay: 10,
      smooth: 'easeInOutQuart', // Efeito de rolagem suave
    });
  };

  return (

    <header className="Home">
      <Cabecalho />

    <Element name='top'>
    
    <div className='inicial'>
        <h1>Colors Rain</h1>
        <h5>UMA CHUVA DE VARIEDADES</h5>
        <p>Variedades de tintas com o melhor  preço do mercado, para todos os tipos de ambientes.</p>
        <Link className= 'button-home'to="/sobrenos">
          <button>Saiba mais</button>
        </Link>
       
      </div>
      
      
      <section className='marcas'>
        <img src='/assets/img/marcas1.png'></img>
        <img src='/assets/img/marcas2.png'></img>
        <img src='/assets/img/marcas3.png'></img>
        <img src='/assets/img/marcas4.png'></img>
        <img src='/assets/img/marcas5.png'></img>
      </section>
      
      <Element name="content">
      
      <section className={`faixas ${hasScrolled ? 'scroll-animation show' : 'scroll-animation'}`}>
        
          

        <div className='internas'>
         <div>
            <h1>Tintas Internas</h1>
            <p>Descubra as melhores indicações para o seu ambiente interno</p>
            <Link to="/tintasinternas">
              <button>Saiba mais</button>
            </Link>
            <p></p>
          </div>
         
          
         
        </div>
        
        <div className='externas'>
         <div>
            <h1>Tintas Externas</h1>
            <p>Descubra as melhores indicações para o seu ambiente externos</p>
            <Link to="/tintasexternas">
              <button>Saiba mais</button>
            </Link>
            <p></p>
          </div>
         
        </div>
        
        <div className='grafite'>
         <div className='grafit'>
            <img className= 'lata' src='../assets/img/icon/lata.png'></img>
            <div className='g'>  
              <h1>Street Art</h1>
              <p>O grafite é uma forma de expressar a arte e os seus movimentos, explorando a vida por meio das cores</p>
              <Link to="/espacografite">
                <button>Saiba mais</button>
              </Link>
            </div>  
            <img className='adesivo' src='../assets/img/adesivo-g.png'></img>
          </div>
         <p className='p'>APENAS ARTE, NÃO VANDALISMO.</p>
        </div>
        

      </section>
      </Element>
      </Element>
      <Rodape/>
    </header>
  )
}


