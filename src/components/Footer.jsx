import React from "react";

const Footer = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.innerHTML.toLowerCase());
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>0</strong>
        items left
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

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
