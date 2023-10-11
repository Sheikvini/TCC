import Cabecalho from "../../components/cabecalho-semrotas";
import "./index.scss";



export default function telaadm(){
      return (
        <article>
            <Cabecalho/>
                <section>
                    <h1 className="cor"></h1>
                <p>
                    <h2 className="NI">@adm</h2>
                <img className="perfil" src="./assets/img/icon/imageadm.png"></img>
                </p>

                </section>
        </article>
    )
 }