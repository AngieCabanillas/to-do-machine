import React from 'react';
import './TodoCounter.css';

function TodoCounter() {//componente
    return(
        <header>
            <h1 className='TodoCounter-title'>Your tasks</h1>
            <h2 className='TodoCounter-subtitle'>You have already completed 5 TODO of 7</h2>
        </header>
    );
}

export {TodoCounter};
// export default TodoCounter;