
import { Link } from 'react-router-dom';
import './index.scss';

function Game() {
 
  return (
    <div className="pagina-game">
     
      <button> 
     
      <div>
        <h1>Escolha a dificuldade</h1>
        <div className='dific'>
          <Link to='/easy'> EASY </Link>
          <Link to='/normal'> NORMAL </Link>
          <Link to='/hard'> HARD </Link>
        </div>
      </div>

      <h3>© 2023, FREI</h3>
      </button>
  
     
      
    </div>
  );
}

export default Game;
