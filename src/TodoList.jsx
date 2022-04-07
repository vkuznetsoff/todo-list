import { useRef, useState } from "react";
import TodoItems from "./TodoItems";
import s from "./TodoItems.module.css";

const TodoList = ({ items, AddItem, RemoveItem, SetComplited }) => {
  const handleButton = () => {
    AddItem(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleButton();
    }
  };

  const handleInput = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <div className={s.inputBlock}>
        <input
          value={userInput}
          onKeyDown={handleKeyPress}
          type="text"
          onChange={handleInput}
        />

        <button className={s.addButton} onClick={handleButton}>
          Add
        </button>
      </div>

      <div>
        <TodoItems
          items={items}
          removeItem={RemoveItem}
          RemoveItem={RemoveItem}
          SetComplited={SetComplited}
        />
      </div>
    </div>
  );
};

export default TodoList;
