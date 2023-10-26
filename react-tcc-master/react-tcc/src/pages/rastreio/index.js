import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import "./index.scss";
import { Link } from 'react-router-dom';


export default function rastreio() {

    return (
    <article>
    <Cabecalho />
        <div className="rastreio">

        <section className="container-rastreio">    
                    <Link to="/">
                         <img className='botao-voltar49' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
                    </Link>
            <h1>Pedidos</h1>
            <p>Código do rastreio: xxx-xxx-xxx</p>
            </section>

            <div className="envio">
            <img src="assets/img/cesta.png" alt="" />
            <img src="assets/img/linha.png" alt="" />
            <img src="assets/img/mao.png" alt="" />
            <img src="assets/img/linha.png" alt="" />
            <img src="assets/img/caminhao.png" alt="" />
            <img src="assets/img/linhacinza.png" alt="" />
            <img src="assets/img/mensagem.png" alt="" />
            <img src="assets/img/linhacinza.png" alt="" />
            <img src="assets/img/estrela.png" alt="" />
            </div>


        <div className="situacao">
            <div className="pedido">
            <h3>Pedido Realizado</h3>
            </div>

            <div className="compra">
            <h3>Compra Realizada</h3>
            </div>
            
            <div className="transito">
            <h3>Em Trânsito</h3>
            </div>

            <div className="entregue">
            <h3>Pedido entregue</h3>
            </div>

            <div className="avaliacao">
            <h3>Avaliação</h3>
            </div>
        </div>
            

        <div className="seupedido">

  <div className="primeira_linha">
    <p>Seu pedido foi realizado com sucesso, aguardando o pagamento</p>
    <p>06/06/2023</p>
    <button className="bt1">CANCELAR COMPRA</button>
  </div>
  <div className="linha-fina"></div>
  <div className="segunda_linha">
    <p>Sua compra foi aprovada com sucesso, seu pedido saíra em breve para entrega</p>
  </div>
  <div className="linha-fina"></div>
  <div className="terceira_linha">
    <p>O seu pedido está à caminho do seu destinatario, o prazo de entrega é de 5 dias uteis </p>
  </div>

        </div>
        </div>
        <Rodape/>
        </article>
    )
}
