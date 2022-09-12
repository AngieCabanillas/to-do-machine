import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return(
        <li>
            <label><input className='checkbox' type='checkbox'/></label>
            <p>{props.text}</p>
            <button className='btn-close'>X</button>
        </li>
    );
}

export {TodoItem};