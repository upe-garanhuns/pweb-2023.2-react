import { useParams } from "react-router-dom"

import ProfilePage from "../components/ProfilePage"

const Perfil = () => {

  const {id} = useParams();

  return (
    <div>
        <h1>Perfil {id} </h1>
        {/* <ProfilePage /> */}
    </div>
  )
}

export default Perfil
