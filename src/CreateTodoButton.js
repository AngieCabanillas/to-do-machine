import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
    const agregar = () => {
      alert('Todo agregado con éxito')

    }

    return(
      <button 
        className='btn-add'
        onClick={agregar}
      >
        +
      </button>
    );
}

export {CreateTodoButton};