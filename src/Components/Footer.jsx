import React from "react";


function Footer({completedtodos,TotalTodos}) {
  return (
    <div className="footer">
      <p>Completed To-dos: {completedtodos}</p>
      <p>Total To-Dos:{TotalTodos}</p>
    </div>
  )
}

export default Footer
