import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho-semrotas";
import "./index.scss";
import Rodape from "../../components/rodape"; 

export default function buscarProduto() {

    return (

        <hearder >
            <Cabecalho/>
                <section className="mae-buscar">
                    <table>
                        
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Modelo</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                            </tr>
                        </thead>

  
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>tintas pva acrilica interna </td>
                                <td>Tintas Internas</td>
                                <td>R$ 51.41</td>
                                
                                <div>
                                  <img src="" alt="" />
                                </div>
                            </tr>
                        </tbody>


                    </table>
                </section>
            
        </hearder>
    )
}