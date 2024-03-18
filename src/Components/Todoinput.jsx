import React, { useState } from 'react';
import Form from './Form';
import Todolist from './Todolist';
import Footer from './Footer';

function Todoinput() {
    const [Todos, setTodos] = useState([]);
    const completedtodos= Todos.filter(((Todo)=>Todo.done)).length
    const TotalTodos=Todos.length

    return (
        <div>
            <Form Todos={Todos} setTodos={setTodos}/>
            <Todolist  Todos={Todos} setTodos={setTodos}/>
            <Footer completedtodos={completedtodos} TotalTodos={TotalTodos}/>
        </div>

    );
}

export default Todoinput;
