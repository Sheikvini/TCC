import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import "./index.scss";
export default function Financas() {

    
    return(

        <article>
        <Cabecalho/>
        <div className="financas">

       <div className="botao">
        
        <Link to={'/financas'}>    
            <button className="lucro">
            <h1>Lucros</h1>
            $364.32M
            </button>
        </Link>

        <Link to={'/financas_mes'}>    
            <button className="mes">
            <h1>Venda por mês</h1>
            Maio
            </button>
        </Link>
        
        <Link to={'/financas_estados'}>
            <button className="estados">
            <h1>Estados</h1>
            Minas Gerais
            </button>
        </Link>

        </div>

    <div className="mapacalor">
    <h2 className="relatorio">Relatório Mensal</h2>
    <img src="assets/img/financa.png" alt="" />
    </div>

    </div>
        </article>
    )
}

