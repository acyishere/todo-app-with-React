import React from "react";

function ListPart({ todoParts, setTodoParts }) {
  const handleCheckbox = (part, event) => {
    console.log(event.target.checked);
    setTodoParts(
      todoParts.map((p) => {
        if (p.id === part.id) {
          return { ...p, done: !p.done };
        } else {
          return p;
        }
      })
    );
  };
  return (
    <div className="todo-container">
      <div className="todo-around">
        <ul className="todo-list">
          {todoParts.map((part) => (
            <li className="list-part" key={part.id}>
              <button
                onClick={() => {
                  setTodoParts(todoParts.filter((p) => part.id !== p.id));
                }}
                className="delete-button"
              >
                X
              </button>
              <input
                checked={part.done}
                type="checkbox"
                className="check-box"
                onChange={(event) => handleCheckbox(part, event)}
              />
              {part.text}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListPart;
