import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho-semrotas";
import "./index.scss";
import Rodape from "../../components/rodape"; 

export default function buscarProduto() {

    return (

        <hearder>
            <Cabecalho/>
                <section className="busca-produto">
                    
                <Link className='volta-adm' to="/adm">
                    <img  src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
                </Link>
                    
                <div className="text-busca-produto">
                    <h1>Busca de Produtos</h1>
                </div>

                

                </section>
            
        </hearder>
    )
}