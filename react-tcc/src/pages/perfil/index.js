import Cabecalho from "../../components/cabecalho"
import "./index.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../../apiURL"
import { Link } from "react-router-dom"



export default function cliente() {
    const [cliente, setCliente] = useState([])

    async function listarCliente(){
        const resp = await axios.get( url + '/perfil')




    }


    return(
        <article>
           <Cabecalho/>
           
           <div className="profile">
            <img className="Pp" src="/assets/img/icon/popo.png" alt="" />
        

        
            {cliente.map(item => {
                        return(
                            <div>
                                <Link className="link-delt" to={`/perfil${item.id_cliente}`} >  
                                <h1>{item.nm_cliente}</h1>
                                <p> {item.ds_email} </p>
                                <p> {item.ds_telefone} </p>
                                <p> {item.ds_estado} </p>
                                <p> {item.ds_rua} </p>
                                <p> {item.ds_numero_complemento} </p>
                                <p> {item.dt_nascimento} </p>
                                <p> {item.ds_cpf} </p> 
                                </Link>
                            </div>
                        )
                    })}

           </div> 
        </article>
    )
}