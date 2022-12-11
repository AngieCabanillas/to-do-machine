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

function useLocalStorage(itemName, initialValue) {
  const carga = true;
  const [loading, setLoading] = React.useState(carga);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName); //todos(string)
        let parsedItem; //todos(objeto-array)

        //verificar si esta vacío
        if (localStorageItem == "") {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    },1000);
  });

  //ES UN COMPONENTE
  //LISTA DE TODOS
  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {
  const {
    item:todos,
    saveItem : saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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
      loading={loading}
      error = {error}
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
