import { NavLink } from "react-router-dom"
import "../styles/NavBar.css";
import { BsHouseDoorFill, BsFillFileEarmarkPlusFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav>
      <NavLink style={({ isActive}) => {
          return {
            color: isActive ? "white" : "#141BE0",
          };
        }}>
        <h1>FormFit</h1>
      </NavLink>
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
