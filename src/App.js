import React, { useState } from 'react';
import './styles/App.css'
import Header from './components/Header'
import Todolist from './components/Todolist'

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <div className="App">
            <Header todos={todos} setTodos={setTodos} />
            <Todolist todos={todos} />
        </div>
    );
}

export default App;
