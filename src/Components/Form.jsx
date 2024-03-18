import React, { useState } from 'react';

function Form({ Todos, setTodos }) {
  const [todo, setTodo] = useState({ name: '', done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...Todos, todo]);
    setTodo({ name: '', done: false }); // Reset todo to an empty object
  }

  function handleChange(e) {
    setTodo({ ...todo, name: e.target.value }); // Update only the name property of todo
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="todoform">
        <div className="inputcontainer">
          <input
            className="inputfield"
            type="text"
            placeholder="Enter Task"
            value={todo.name}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
