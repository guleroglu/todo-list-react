import React from "react";

const TodoItem = ({
  todo,
  todos,
  setTodos,
  
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );

  
  };

  return (
    <li className={`${todo.completed ? "completed" : "view"}`}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={completeHandler} />
        <label onClick={completeHandler}>{todo.text}</label>
        <button className="destroy" onClick={deleteHandler}></button>
      </div>
    </li>
  );
};

export default TodoItem;
