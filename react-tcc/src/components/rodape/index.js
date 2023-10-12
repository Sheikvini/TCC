 
import "./index.scss"

export default function Rodape() {
    return(
        <header className="rodape">
            <section className="cont-rod">
                <div>
                    <img src="/assets/img/icon/truck.png"></img>
                    <div>
                        <h1>FRETE GRÁTIS</h1>
                        <p>Em produtos selecionados</p>
                    </div>
                </div>

                <div>
                    <img src="/assets/img/icon/time.png"></img>
                    <div>
                        <h1>ENTREGA RÁPIDA</h1>
                        <p>A partir de 2 dias úteis</p>
                    </div>
                </div>

                <div>
                    <img src="/assets/img/icon/buy.png"></img>
                    <div>
                        <h1>EM ATÉ 10X SEM JUROS</h1>
                        <p>No cartão de crédito</p>
                    </div>
                </div>
            </section>
            <div className="line"></div>

            <footer>
                <div>
                    <h1>Ajuda</h1>
                    <li>Entregas</li>
                    <li>Minha Conta</li>
                    <li>Meus Pedidos</li>
                    <li>Pagamento</li>
                    <li>Cancelamentos</li>
                </div>

                <div>
                    <h1>Institucional</h1>
                    <li>Sobre a Colors Rain</li>
                    <li>Política de Privacidade</li>
                    <li>Termos de Uso</li>
                </div>

                <div>
                    <div>
                        <img src="/assets/img/icon/insta.png"></img>
                        <img src="/assets/img/icon/whats.png"></img>
                        <img src="/assets/img/icon/face.png"></img>
                        <img src="/assets/img/icon/tik.png"></img>
                    </div>
                    <div>
                    <img className="cartao" src="/assets/img/icon/cartao.png"></img>
                    </div>
                </div>
                
            </footer>
            <img src="/assets/img/logo.png"></img>
        </header>

    )
}
