import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    return(
        <li>
            <label>
                <input 
                    className='checkbox'
                    type='checkbox'
                    onClick= {props.onComplete}
                />
            </label>
            <p>{props.text}</p>
            <button 
                className='btn-close' 
                onClick={props.onDelete}
            >
                X
            </button>
        </li>
    );
}

export {TodoItem};