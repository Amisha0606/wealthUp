import React, { useState, ChangeEvent, FormEvent } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo..."
      />
    </form>
  );
};

export default TodoForm;
