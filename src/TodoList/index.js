import React from 'react';
import './TodoList.css';

//coloco props para poder usar su propiedad que es TodoItem
function TodoList(props) {
    return(
        <section>
            <ul>
                {/* colocando TodoItem pero como es propiedad de TodoList, usamos children  */}
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};