import FormFit from "../components/FormFit"
import { useFetch } from "../hooks/useFetch"

const url = "http://localhost:3000/pessoas";

const Home = () => {

  const {data: pessoas} = useFetch(url); 

  return (
    <div>
        <div className='formfit-list'>
            <h1>Lista de Alunos</h1>
            {pessoas && pessoas.map((pessoa) => (
                <FormFit key={pessoa.id} pessoa={pessoa}/>
            ))}
        </div>
    </div>
  )
}

export default Home
