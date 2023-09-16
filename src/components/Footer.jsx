import React from "react";

const Footer = ({ setStatus, filteredTodos, setFilteredTodos, todos, setTodos }) => {
  const statusHandler = (e) => {
    setStatus(e.target.innerHTML.toLowerCase());
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{filteredTodos.length}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected" onClick={statusHandler}>
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={statusHandler}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => {
        let completed = todos.filter((todo) => todo.completed !== true);
        setTodos(completed);
      }}>Clear completed</button>
    </footer>
  );
};

export default Footer;
