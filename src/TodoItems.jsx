import { useEffect } from "react";
import s from "./TodoItems.module.css";

const TodoItems = ({ items, RemoveItem, SetComplited }) => {
  const handleDelete = (id) => {
    RemoveItem(id);
  };

  const handleItem = (e, id) => {
    
    SetComplited(id);
  };
  let itemsList = items.map((i) => (
    <Item
      key={i.id}
      item={i}
      handleDelete={handleDelete}
      handleItem={handleItem}
    />
  ));

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <div className={s.container}>{itemsList}</div>
    </div>
  );
};

const Item = ({ item, handleDelete, handleItem }) => {
  return (
    <div>
     
      <div key={item.id} className={s.item}>
        <div
          className={item.complited ? `${s.itemText} ${s.complited}` : s.itemText}
          onClick={() => {
            handleItem(item.id);
          }}
        >
          {item.value}
        </div>

        <div
          className={s.itemDelete}
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
