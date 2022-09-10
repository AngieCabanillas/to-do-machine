import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
//import './App.css';

//creando lista falsa
const todos = [
  {
    text:'Cleaning house', completed:'false'
  },
  {
    text:'Doing my homework', completed:'false'
  },
  {
    text:'Riding a bike', completed:'false'
  },
]

function App() { //ES UN COMPONENTE
  return (
    //React.Fragment -> react pide que sea 1 sola etiqueta
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList> 
        {todos.map(todo => (
           //key es un identificador para los children
           <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
