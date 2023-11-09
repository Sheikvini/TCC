import Cabecalho from "../../components/cabecalho";
import './index.scss'

export default function Perfil(){



    return(
        <article>
           <Cabecalho/>
           
           <div className="profile">
            <img className="Pp" src="/assets/img/icon/imageadm.png" alt="" />
            <h1>Nome do Cliente</h1>
            <p>Email: cliente@email.com</p>
            <p>Telefone: (123) 456-7890</p>
            <p>Endereço: Rua ABC, Cidade, País</p>
           </div> 
        </article>
    )
}