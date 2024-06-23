import React from "react";

function Todo() {
  return (
    <div className="todo">
      <p>Goto Gym</p>
      <div className="actions">
        <input type="checkbox" />
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
