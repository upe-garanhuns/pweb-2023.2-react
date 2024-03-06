import { Outlet } from 'react-router'
import './App.css'
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
