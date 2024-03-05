import { useState } from 'react'
import './App.css'

import Form from './components/Form'
import FormFit from './components/FormFit'

const App = () => {
const [formfits] = useState([
  {
    id:1,
    nome:"Matheus Interaminense",
    email:"matheus.interaminense@upe.br",
  },
])

  return (
      <div className='app'>
        <Form />
        <div className='formfit-list'>
          {formfits.map((formfit) => (
            <FormFit
              key={formfit.id}
              formfit = {formfit}
            />
          ))}
        </div>
      </div>
      

  )
}

export default App
