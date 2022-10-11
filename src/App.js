import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
// import './App.css';

//creando lista falsa
const defaultTodos = [
  {
    text: "Cleaning house",
    completed: false,
  },
  {
    text: "Doing my homework",
    completed: false,
  },
  {
    text: "Riding a bike",
    completed: false,
  },
];

function App() {
  //ES UN COMPONENTE
  //LISTA DE TODOS
  const [todos, setTodos] = React.useState(defaultTodos);
  //PASAMOS AQUI LOS ESTADOS PARA LOS COMPONENTES
  const [search, setSearch] = React.useState("");
  //CONTAR TODOS COMPLETOS
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  //CONTAR TOTAL DE TODOS
  const totalTodos = todos.length;

  //todos buscados
  let searchTodos = [];

  if (!search.length > 0) {
    //no hay caracteres en el input
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      //convertir en minuscula a search y todos.text
      const searchText = search.toLowerCase();
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //TODOS COMPLETOS
  const completeTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text ===text);
    const newTodos = todos.slice();
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    setTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text ===text);
    const newTodos = todos.slice();
    newTodos.splice(indexTodo,1);
    setTodos(newTodos);
  }

  return (
    //React.Fragment -> react pide que sea 1 sola etiqueta
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {searchTodos.map((todo) => (
          //key es un identificador para los children
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            onComplete={()=>completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} 
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
