import React, {useState, useEffect} from 'react';

import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  }
   
  

  const getLocalTodos = () => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <div className="App">
      <header>
        <h1>Daniel's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText}  inputText={inputText} setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
