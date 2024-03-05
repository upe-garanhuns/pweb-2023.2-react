import './App.css'

import Form from './components/Form'
import FormFit from './components/FormFit'

function App() {
  return (
    <div>
      <div className='app'>
        <h1>Lista de Alunos</h1>
        <div className='formfit-list'>
          {formfits.map((formfit) =>(
            <FormFit formfit = {formfit} />
          ))}
        </div>
      </div>
      <Form />
    </div>
  )
}

export default App
