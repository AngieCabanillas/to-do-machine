import React from 'react';
import './TodoCounter.css';

function TodoCounter({completed, total}) {//componente
    return(
        <header>
            <h1 className='TodoCounter-title'>Your tasks</h1>
            <h2 className='TodoCounter-subtitle'>You have already completed {completed} TODO of {total}</h2>
        </header>
    );
}

export {TodoCounter};
// export default TodoCounter;