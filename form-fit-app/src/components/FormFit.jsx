import React from 'react'

const FormFit = (formfit) => {
  return (
    <div className='formfit'>
    <div className='content'>
      <p>{formfit.nome}</p>
      <p className='category'>({formfit.category})</p>  
    </div>
    <div>
      <button>Completar</button>
      <button>X</button>
    </div>
  </div>
  )
}

export default FormFit