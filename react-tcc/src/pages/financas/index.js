import Cabecalho from "../../components/cabecalho";
import "./index.scss";
export default function Financas() {

    
    return(

        <article>
        <Cabecalho/>
        <div className="financas">

       <div className="botao">
        
        <button className="lucro">
        <h1>Lucros</h1>
        <img src="assets/img/arquivo.png" alt="" />
        $364.32M
        </button>

        <button className="mes">
        <h1>Venda por mês</h1>
        <img src="assets/img/calendario.png" alt="" />
        Maio
        </button>

        <button className="estados">
        <h1>Estados</h1>
        <img src="assets/img/mapa.png" alt="" />
        Minas Gerais
        </button>
        </div>

    <div className="mapacalor">
    <h2 className="relatorio">Relatório Despesas e lucros</h2>
    <img src="assets/img/financas.png" alt="" />
    </div>

    </div>
        </article>
    )
}

