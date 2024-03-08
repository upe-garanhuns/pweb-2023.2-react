import { Link } from "react-router-dom"
import "../styles/FormFit.css";

const FormFit = ({pessoa}) => {
  return (
    <div className='formfit'>
        <div className='content'>
            <p className="nome">{pessoa.nome}</p>
            <div className="dados">
            <p className="email">{pessoa.email}</p>
            <p className="numero">{pessoa.telefone}</p>
            </div>
            <Link className="link" to={`/perfil/${pessoa.id}`}>
              <p className="detalhes">Detalhes</p>
            </Link>
        </div>
    </div>
  )
}

export default FormFit