import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cadastro">Cadastrar</NavLink>
    </div>
  )
}

export default NavBar
