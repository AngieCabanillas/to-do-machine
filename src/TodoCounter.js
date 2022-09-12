import React from 'react';
import './TodoCounter.css';

function TodoCounter() {//componente
    return(
        <header>
            <h1 className='TodoCounter-title'>Your tasks</h1>
            <h2 className='TodoCounter-subtitle'>Has completado 1 de 4 TODOs</h2>
        </header>
    );
}

export {TodoCounter};
// export default TodoCounter;