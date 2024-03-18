import React from 'react';
import Todoitem from './Todoitem';

function Todolist({ Todos, setTodos }) {
  return (
    <div className="list">
      {Todos.map((item) => (
        <Todoitem  key={item.name} item={item} Todos={Todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}

export default Todolist;
