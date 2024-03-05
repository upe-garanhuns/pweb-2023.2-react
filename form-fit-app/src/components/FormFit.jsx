import React from 'react'

const FormFit = ({formfit}) => {
  return (
    <div className='formfit'>
        <div className='content'>
            <h1>Lista de Alunos</h1>
            <p>{formfit.nome}</p>
            <p>{formfit.email}</p>
        </div>
    </div>
  )
}

export default FormFit