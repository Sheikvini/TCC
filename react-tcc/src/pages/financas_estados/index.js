import Cabecalho from "../../components/cabecalho";
import "./index.scss";
export default function Financas_estados() {

    
    return(

        <article>
        <Cabecalho/>
        <div className="financas">

       <div className="botao">
        
        <button className="lucro">
        <h1>Lucros</h1>
        $364.32M
        </button>

        <button className="mes">
        <h1>Venda por mês</h1>
        Maio
        </button>

        <button className="estados">
        <h1>Estados</h1>
        Minas Gerais
        </button>
        </div>

    <div className="mapacalor">
    <h2 className="relatorio">Relatório Mensal</h2>
    <img src="../assets/img/estado.png" alt="" />
    </div>

    </div>
        </article>
    )
}

