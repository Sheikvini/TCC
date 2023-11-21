import { url } from "../../constants";
import './index.scss'

import { useNavigate } from "react-router-dom";

export default function CarrinhoItem(props){



    return (
        <div className="comp-carrinho-item">
                    <div className="produto-container">
                        <div className="produto-box">
                            <div className="imagens">
                          
                                   <img className="img-carrinho" src={props.item.produto.img_produto} ></img>
                                
                            </div>
                            <div className="detalhes">
                                <div className="nome">{props.item.produto.nm_produto}</div>
                                <div className="departamento">{props.item.produto.nm_categoria} </div>

                                <div className="preco-label">PREÇO</div>
                                <div className="preco"> R$ {props.item.produto.vl_preco}</div>
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