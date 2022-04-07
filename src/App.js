import { useState } from 'react';
import s from './App.module.css';
import TodoList from './TodoList';
import uniqid from "uniqid"


const initList = JSON.parse(localStorage.getItem("todoList"))
function App() {

  const [todoList, setTodoList] = useState(initList)

  const AddItem = (value) => {
    if (value) {
      const newItem = {
        id: uniqid(),
        value,
        complited: false
      }
      setTodoList([...todoList, newItem])
    }
  }

  const  RemoveItem = (id) => {
    setTodoList([...todoList.filter(el => el.id != id)])
  }

  const SetComplited = (id) => {
    
    setTodoList([
      ...todoList.map( (el) => 
      el.id===id ? {...el, complited: !el.complited} : {...el} )])
    
  }

  return (
    
    <div className={s.app}>
      

        
        
      <header >
        Задач в списке: {todoList.length}
      </header>

     
  
  <TodoList AddItem={AddItem}
        items={todoList} 
        RemoveItem={RemoveItem}
        SetComplited={SetComplited} />
 
      
    </div>
  );
}

export default App;
