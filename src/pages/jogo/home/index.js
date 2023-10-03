
import { Link } from 'react-router-dom';
import './index.scss';


function Home() {
 
  return (
    
    <div className="pagina-home">
      <Link to="jogo-da-memória"> 
      <button> 
     
      <div>
        <h1>Seja Bem-vindo ao nosso Jogo da memória </h1>
        <h2> Clique pra começar</h2>
      </div>

      <h3>© 2023, FREI</h3>
      </button>
      </Link>
     
      
    </div>
  );
}

export default Home;
