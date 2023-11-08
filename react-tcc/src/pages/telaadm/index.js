import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho-semrotas";
import "./index.scss";
import Rodape from "../../components/rodape"; 

export default function telaadm(){
    return (
      <article>
          <Cabecalho/>
              <section className="menu-adm">

                <div className="container-adm">

                    <div className="pf">
                        <img className="perfil" src="./assets/img/icon/imageadm.png" height={50}></img>
                        <h2 className="NI">@adm</h2>
                    </div>

                </div>
        <header className="tdpalavra">

                        <Link className="FI" to={'/financas'}>
                            <div >
                                <img src="./assets/img/icon/imagefinancas.png" height={50} width={50}></img>
                                <h3>Finanças</h3>
                            </div>
                        </Link>

                        <Link className="CP" to={'/novatinta'}>
                            <div>
                                <img src="./assets/img/icon/imagecr.png" height={50} width={90}></img>
                                <h4> Criar Produtos</h4>
                            </div>
                        </Link>

                        <Link  className="BD" to={'/pesquisa-produtos'}>
                            <div>
                                <img src="./assets/img/icon/imagelupa.png" height={50} width={50} ></img>
                                <h5> Buscar Produtos</h5>
                            </div>
                        </Link>

                        <Link className="PR" to={'/compras'}>
                            <div>
                                <img src="./assets/img/icon/imagerelatorio.png" height={50} width={50} ></img>
                                <h5>Relatórios de compra</h5>
                            </div> 
                        </Link>

                    </header>


                    <Link className="P" to='/login-adm'>
                        <img className="Port" src="./assets/img/icon/imageporta.png"></img>
                        <h1 className="Sa"> Sair</h1>
                    </Link>


                    <div className="imgGG">
                        <img className="img" src="./assets/img/logo.png"></img>
                    </div>

              </section>
        <Rodape/>
      </article>

  )
}