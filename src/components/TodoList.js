import React from "react";

import Todo from "./Todo";


const TodoList = ({filteredTodos, setTodos}) => {

  const todoHtml = filteredTodos.map(todo => {
      return (
          <Todo key={todo.id} todo={todo} text={todo.text} todos={filteredTodos} setTodos={setTodos} />
      )
  })
  return (
    <div className="todo-container">
        <ul className="todo-list">
            {todoHtml}
        </ul>
    </div>
  );
};


export default  TodoList;
