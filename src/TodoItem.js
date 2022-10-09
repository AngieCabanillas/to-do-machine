import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = (event) => {
        if(!event.target.checked){
            alert("El todo ya esta completo");
        } else{
            alert('Estas marcando el todo como completo ' + props.text);
        }
        
    };

    const onDelete = () =>{
        alert('Has eliminado el todo ' + props.text);
    }
    
    return(
        <li>
            <label>
                <input 
                    className='checkbox'
                    type='checkbox'
                    onClick={onComplete}
                />
            </label>
            <p>{props.text}</p>
            <button 
                className='btn-close' 
                onClick={onDelete}
            >
                X
            </button>
        </li>
    );
}

export {TodoItem};