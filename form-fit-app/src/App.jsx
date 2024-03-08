import { Outlet } from 'react-router'
import './styles/App.css'
import NavBar from './components/NavBar'


const App = () => {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
