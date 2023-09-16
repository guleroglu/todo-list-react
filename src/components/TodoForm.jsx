import React from "react";

const TodoForm = ({
  inputText,
  setInputText,
  todos,
  setTodos,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        id: Math.random(),
        isCompleted: false,
      },
    ]);

  
    setInputText("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={inputTextHandler}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TodoForm;
