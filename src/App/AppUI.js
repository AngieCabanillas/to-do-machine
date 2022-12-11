import { React } from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  search,
  setSearch,
  searchTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    //React.Fragment -> react pide que sea 1 sola etiqueta
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {loading && <p>Estamos cargando</p>}
        {error && <p>Tenemos un error</p>}
        {(!loading && !searchTodos.length) && <p>Crea tu primer TODO</p>}

        {searchTodos.map((todo) => (
          //key es un identificador para los children
          <TodoItem
            key={todo.text}
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
