import React, { useState, useEffect } from 'react';
import './index.scss';
import Card from '../../../components/card';
import { Link } from 'react-router-dom';

function Normal() {
  const imagens = [
    '/assets/img/produtos/tinta1(1).png', '/assets/img/produtos/imag7.png', '/assets/img/paleta.jpg', '/assets/img/tintapiso.jpg','/assets/img/tintapiso2.jpg',
    '/assets/img/produtos/tinta1(1).png', '/assets/img/produtos/imag7.png', '/assets/img/paleta.jpg', '/assets/img/tintapiso.jpg','/assets/img/tintapiso2.jpg',
  ];

  const [cartas, setCartas] = useState(embaralhar(imagens));
  const [viradas, setViradas] = useState([]);
  const [pares, setPares] = useState([]);

  function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const clicar = index => {
    if (viradas.length < 2 && !viradas.includes(index) && !pares.includes(cartas[index])) {setViradas([...viradas, index]);

      if (viradas.length === 1) {
        const primeiraCarta = viradas[0];
        if (cartas[primeiraCarta] === cartas[index]) {
          setPares([...pares, cartas[index]]);
          setViradas([]);
        } else {
          setTimeout(() => {
            setViradas([]);
          }, 1000);
        }
      }
    }
  };

  useEffect(() => {
    if (pares.length === imagens.length / 2 ) {
      window.location.href = 'http://localhost:3000/congratulations';
    }
  }, [pares, imagens.length]);

  return (
    <div className="pagina-normal">
      <div>
      {cartas.map((image, index) => (
        <Card
          key={index}
          image={image}
          virar={viradas.includes(index) || pares.includes(image)}
          onClick={() => clicar(index)}
        />
      ))}
    </div>


    <Link className='a2' to='/homej'>Exit</Link>
    </div>
  );
}

export default Normal;
