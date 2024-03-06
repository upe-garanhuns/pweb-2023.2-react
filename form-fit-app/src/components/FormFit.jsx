import { Link } from "react-router-dom"

const FormFit = ({pessoa}) => {
  return (
    <div className='formfit'>
        <div className='content'>
            <p>{pessoa.nome}</p>
            <p>{pessoa.email}</p>
            <Link to={`/perfil/${pessoa.id}`}>Detalhes</Link>
        </div>
    </div>
  )
}

export default FormFit