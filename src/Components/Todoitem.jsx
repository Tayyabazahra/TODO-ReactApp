import React from 'react';

function Todoitem({ item, Todos, setTodos }) {

  function handledelete(item) {
    console.log("BUTTON CLICKED FOR", item);
    setTodos(Todos.filter(todo => todo.name !== item.name));
  }

  function handlestrike(name) {
    const newarray = Todos.map(todo => todo.name === name ? { ...todo, done: !todo.done } : todo);
    setTodos(newarray);
  }

  return (
    <div className={`listitem ${item.done ? 'completed' : ''}`}>
      <div className='itemname'>
        <span onClick={() => handlestrike(item.name)}>{item.name}</span>
        <span>
          <button className='deletebutton' onClick={() => handledelete(item)}>X</button>
        </span>
      </div>
      <hr className='listline' />
    </div>
  );
}

export default Todoitem;
