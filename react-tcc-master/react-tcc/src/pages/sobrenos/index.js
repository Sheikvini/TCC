import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"
import "./index.scss"



export default function Sobrenos() {

    return (
    <article>
    <Cabecalho />
        <div className="global">

        <div className="testo1">
        <h1 className="h1-sn">Colors Rain</h1>
        <h5 className="h5-sn">UMA CHUVA DE VARIEDADES</h5>
        </div>

        <div className="texto2">
        <p>Fundada em 2023, Colors Rain é uma empresa terceirizada online que conta com uma alta tecnologia para fornecer uma experiência única ao cliente na hora de efetuar a sua compra e adquirir o melhor produto para a sua necessidade. A nossa missão é fazer com que o cliente receba uma indicação para o seu tipo de pintura ideial, e para que os artistas apaixonados por arte se sintam em casa para poder explorar e conhecer os produtos da Colors Rain, a empresa apoia e e estimula o uso da arte urbana e do grafite, com permissão e dentro dos protótipos da lei. A Colors Rain se desponibiliza para doações para ongs e escolas de artes, para que a arte possa ser acessível para todos. Nossos produtos são selecionados e de alta qualidade, para que o cliente possa fazer o uso da melhor forma possível. Cada detalhe do site foi estruturado com o intuíto de facilitar a compra do cliente e para que ele se sinta em um lugar aconchegante para isso. Logo após o pagamento ser confirmado, enviamos a mercadoria dirertamente para o correio, para que assim possa chegar até o CEP designado.</p>
        </div>    
        <div className="imagens">
        <img src="/assets/img/grafitenaoecrime.png"></img>
        <img src="/assets/img/colorstinta.png"></img>
        </div>
    </div>
    <Rodape />
        </article>
    )
}