import { useEffect, useState } from "react";
import { url } from "../../constants";
import './index.scss'
import storage from 'local-storage'
import { useNavigate } from "react-router-dom";

export default function CarrinhoItem(props){
    const [subtotal, setSubtotal] = useState('-');
    const [qtdProduto, setQtdProdutos] = useState(1);
    
    function remover() {
        props.removerItem(props.item.produto.id_produto);
    } 

    function calcularSubtotal(){
        let carrinho = storage('carrinho');
        let itemStorage = carrinho.find(item => item.id );
        itemStorage.qtd = qtdProduto
        const subtotal = itemStorage.qtd * Number(props.item.produto.vl_preco);
        subtotal.toFixed(2)
        return subtotal;
    }

    function alterarQuantidade(novaqtd){
        setQtdProdutos(Number(novaqtd));
        let carrinho = storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == props.item.produto.id_produto);
        carrinho = carrinho.filter(item => item.id != props.item.produto.id_produto )
        itemStorage.qtd = Number(novaqtd)
        carrinho.push(itemStorage)
        calcularSubtotal()
        storage('carrinho', carrinho);
        props.renderizar(novaqtd)
    }

    useEffect(() => {
        let carrinho = storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == props.item.produto.id_produto);
        console.log(itemStorage);
        setQtdProdutos(itemStorage.qtd)
    }, [])

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
                                 <select onChange={ e => alterarQuantidade(e.target.value)} value={qtdProduto}> 
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
                            <div className="excluir" onClick={remover}>Excluir</div>
                        </div> 
                    </div>
                </div>
    )
}