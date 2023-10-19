
import { Link } from 'react-router-dom';
import './index.scss';

function Congratulations() {
 
  return (
    <div className="pagina-cong">
      <Link to="/"> 
      <button> 
      <h1>Parabéns você chegou ao fim do nosso desafio!</h1>

      <h3>© 2023, FREI</h3>
      </button>
      </Link>
     
      
    </div>
  );
}

export default Congratulations;
