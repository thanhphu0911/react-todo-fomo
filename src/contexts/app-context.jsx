import React from "react";

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [todos, setTodos] = React.useState([]); // memory A

  function addTodo(title) {
    const todoItem = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevState) => [...prevState, todoItem]);
  }
  function deleteTodos() {
    setTodos([]);
  }

  function handleRemoveCompletedTodo(todoId) {
    const todoCompletedIndex = todos.findIndex((todo) => todo.id === todoId);

    console.log(todoCompletedIndex);
    if (todoCompletedIndex === -1) return;
    const clonedTodos2 = [...todos];
    clonedTodos2[todoCompletedIndex].completed = false;
    setTodos(clonedTodos2);
  }

  function handleCompletedTodo(todoId, checked) {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex === -1) return;
    const clonedTodos = [...todos];
    console.log(todoIndex);

    clonedTodos[todoIndex].completed = true; // memory A
    setTodos(clonedTodos);
  }
  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        handleCompletedTodo,
        deleteTodos,
        handleRemoveCompletedTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => React.useContext(AppContext);
