import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ProfilePage from "../components/Profile";

const url = "http://localhost:3000/pessoas";

const Perfil = () => {
  const { id } = useParams();
  const {data: pessoa} = useFetch(url + `/${id}`)

  return (
    <div>
      <h1>Perfil {id}</h1>
      {pessoa ? 
        <ProfilePage dadosAluno={pessoa}/> 
      : <p>Carregando...</p>}
      
    </div>
  );
};

export default Perfil;