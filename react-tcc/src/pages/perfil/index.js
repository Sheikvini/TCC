import Cabecalho from "../../components/cabecalho"
import "./index.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../../apiURL"
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';

export default function Perfil() {
    
    const [cliente, setCliente] = useState([])
    const navigate = useNavigate();

    // async function listarCliente(){
    //     const resp = await axios.get( url + '/cadastro')

    //     const respFiltrados = resp.data.filter(item => item.id_cliente)

    //     setCliente(respFiltrados)

    // }

    // useEffect(() => {
    //     listarCliente()
    // }, [])
    
    function sair(){
        storage.remove('usuario-logado');
        navigate('/login');
      }



    return(
        <article className="container-perfil">
           <Cabecalho/>
           
           <section className="subcontainer-perfil">
           <div className="profile">
                <img className="Pp" src="/assets/img/icon/popo.png" alt="" />
                
        
                <div>

                    {cliente.map(item => {
                                return(
                                    <div>
                                          
                                        <h1>{item.nm_cliente}</h1>
                                        <p> {item.ds_email} </p>
                                        <p> {item.ds_telefone} </p>
                                        <p> {item.ds_estado} </p>
                                        <p> {item.ds_rua} </p>
                                        <p> {item.ds_numero_complemento} </p>
                                        <p> {item.dt_nascimento} </p>
                                        <p> {item.ds_cpf} </p> 
                                        

                                        <button className="sair-perfil">{sair}</button>
                                    </div>
                                )
                            })}
                </div>
           </div>
           </section> 
        </article>
    )
}