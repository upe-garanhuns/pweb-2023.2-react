import { NavLink } from "react-router-dom"
import "../styles/NavBar.css";
import { BsHouseDoorFill, BsFillFileEarmarkPlusFill } from "react-icons/bs";
import "../assets/logo.jpeg"

const NavBar = () => {
  return (
    <nav>
      <img src="" alt="Logo" />
      <h1>FormFit</h1>
      <div className="links">
        <NavLink className="nav-link" 
        to="/"
        style={({ isActive}) => {
          return {
            color: isActive ? "white" : "#141BE0",
          };
        }}
      >
          <p><BsHouseDoorFill /></p>
          <p>Home</p>
        </NavLink>
        <NavLink className="nav-link"
        to="/cadastro"
        style={({ isActive}) => {
          return {
            color: isActive ? "white" : "#141BE0",
          };
        }}
        >
          <p><BsFillFileEarmarkPlusFill /></p>
          <p>Cadastrar</p>
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
