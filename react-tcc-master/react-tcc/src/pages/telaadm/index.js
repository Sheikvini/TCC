import { Link } from "react-router-dom";
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

              <hr className="linha"></hr>

              <header className="tdpalavra">
                  <h3 className="F">Finanças</h3>
                  <h4 className="CP"> Criar Produtos</h4>
                  <h5 className="BD"> Buscar Produtos</h5>
                  <h6 className="R"> Relatório</h6>
                  <h7 className="P"><b>Pedidos em andamento</b> </h7>
              </header>

              <section className="tdimg">
                  <img className="FI" src="./assets/img/icon/imagefinancas.png" height={50} width={50}></img>
                  <img className="CPP" src="./assets/img/icon/imagecr.png" height={50} width={90}></img>
                  <img className="BDD" src="./assets/img/icon/imagelupa.png" height={50} width={50} ></img>
                  <img className="RE" src="./assets/img/icon/imagerelatorio.png" height={50} width={50}></img>
                  <img className="PA" src="./assets/img/icon/imagebusao.png" height={50} width={50}></img>
              </section>
<hr className="linha-baixo"></hr>

              <div className="porta">

              </div>

              <Link className="P" to='/login'>
                  <img className="Port" src="./assets/img/icon/imageporta.png"></img>
              </Link>

              <Link  to='/login'>
                  <h1 className="Sa"> Sair</h1>
              </Link>

              <div className="imgGG">
                  <img className="img" src="./assets/img/produtos/inicial.png"></img>
              </div>

              </section>
      </article>
  )
}