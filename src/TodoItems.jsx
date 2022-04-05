import { useEffect } from "react";
import s from "./TodoItems.module.css";

const TodoItems = ({ items, RemoveItem, SetComplited }) => {
  const handleDelete = (id) => {
    RemoveItem(id);
  };

  const handleItem = (id) => {
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
    localStorage.setItem("todoList", JSON.stringify(items))
  }, [items]);

  return <div className={s.itemsList}>{itemsList}</div>;
};

const Item = ({ item, handleDelete, handleItem }) => {
  return (
    <div key={item.id} className={s.item}>
      <div
        className={item.complited ? s.complited : s.itemText}
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
  );
};

export default TodoItems;
