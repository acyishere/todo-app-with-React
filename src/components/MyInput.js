import React from "react";

function MyInput({ inputMessage, setInputMessage, todoParts, setTodoParts }) {
  const inputTextChange = (event) => {
    setInputMessage(event.target.value);
  };

  const getID = () => {
    if (todoParts.length === 0) {
      return 1;
    } else {
      return todoParts[todoParts.length - 1].id + 1;
    }
  };

  const submitInputDown = () => {
    if (todoParts.find((x) => inputMessage.trim() === x.text)) return;
    setTodoParts([
      ...todoParts,
      { text: inputMessage, done: false, id: getID() },
    ]);
    setInputMessage("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitInputDown();
      }}
    >
      <div>
        <input
          value={inputMessage}
          onChange={inputTextChange}
          type="text"
          className="todo-input"
          placeholder="new task"
        />
        <button
          onClick={submitInputDown}
          className="todo-button"
          type="button"
          disabled={!inputMessage.trim()}
        >
          ADD
        </button>
      </div>
    </form>
  );
}

export default MyInput;
