import React, { useState } from "react";
import TodoList from "../app/TodoList";
import TodoForm from "../app/TodoForm";


// interface Todo {
//   id: number;
//   text: string;
// }

// const TodoPage: React.FC = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodo = (text: string) => {
//     setTodos([...todos, { id: todos.length + 1, text }]);
//   };

//   const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} deleteTodo={deleteTodo} />
//     </div>
//   );
// };

// export default TodoPage;

// import React, { useState } from "react";
// import TodoList from "../components/TodoList";
// import TodoForm from "../components/TodoForm";

interface Todo {
  id: number;
  text: string;
}

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPage;
