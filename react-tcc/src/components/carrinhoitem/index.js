import { url } from "../../constants";
import './index.scss'

import { useNavigate } from "react-router-dom";

export default function CarrinhoItem(props){

    return (
        <div className="comp-carrinho-item">
                    <div className="produto-container">
                        <div className="produto-box">
                            <div className="imagens">
                                <div className="atual">
                                    <img src="../tinta1.png"/>
                                </div>
                            </div>
                            <div className="detalhes">
                                <div className="nome"> Nome do produto Top aqui</div>
                                <div className="departamento">departamento aqui </div>

                                <div className="preco-label">PREÇO</div>
                                <div className="preco"> R$ 123,45</div>
                            </div>
                        </div>
                        <div className="qtd-box">
                            <div className="qtd">
                                <label>Qtd.</label>
                                <select>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                </select>
                            </div>
                            <div className="subtotal">
                                <div>Subtotal</div>
                                <div>R$ 200,00</div>
                            </div>
                            <div className="excluir">Excluir</div>
                        </div> 
                    </div>
                </div>
    )
}