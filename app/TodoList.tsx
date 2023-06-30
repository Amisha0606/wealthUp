// import React from "react";

// interface Todo {
//   id: number;
//   text: string;
// }

// interface TodoListProps {
//   todos: Todo[];
// }

// const TodoList: React.FC<TodoListProps> = ({ todos }) => {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           <span>{todo.text}</span>
//           <button>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

import React from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

