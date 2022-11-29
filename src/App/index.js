import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

//creando lista falsa
// const defaultTodos = [
//   {
//     text: "Cleaning house",
//     completed: false,
//   },
//   {
//     text: "Doing my homework",
//     completed: false,
//   },
//   {
//     text: "Riding a bike",
//     completed: false,
//   },
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');//todos(string)
  let parsedTodos;//todos(objeto-array)
  
  //verificar si esta vacío
  if(localStorageTodos==''){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  } else{
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  //ES UN COMPONENTE
  //LISTA DE TODOS
  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  //TODOS COMPLETOS
  const completeTodo = (text) => {
    const indexTodo = todos.findIndex((todo) => todo.text === text);
    const newTodos = todos.slice();
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex((todo) => todo.text === text);
    const newTodos = todos.slice();
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      search={search}
      setSearch={setSearch}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
