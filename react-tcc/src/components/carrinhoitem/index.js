import { useState } from "react";
import { url } from "../../constants";
import './index.scss'

import { useNavigate } from "react-router-dom";

export default function CarrinhoItem(props, removerItem){
    // const [subtotal, setSubtotal] = useState('-');
    // const [qtdProduto, setQtdProdutos] = useState('');

    // function remover() {
    //     removerItem(props.id);
    // } 

    function calcularSubtotal(){
        const subtotal = props.qtd * props.item.produto.vl_preco;
        return subtotal;
    }

    // function alterarQuantidade(novaqtd){
    //     setQtdProdutos(novaqtd);
    //     let carrinho = Storage('carrinho');
    //     let itemStorage = carrinho.find(item => item.id );
    //     itemStorage.qtd = novaqtd;

    //     Storage('carrinho', carrinho);
    // }

    

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
                                 <select /*onChange={ e => alterarQuantidade(e.target.value)} value={qtdProduto}*/> 
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="subtotal">
                                <div>Subtotal</div>
                                <div>R$ {calcularSubtotal()}</div>
                            </div>
                            <div className="excluir" >Excluir</div>
                        </div> 
                    </div>
                </div>
    )
}