import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import uniqid from "uniqid"

const initList = [
  {
    id: uniqid(),
    value: '1',
    complited: false
  }
]
function App() {


  const [todoList, setTodoList] = useState([])

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
    debugger
    setTodoList([...todoList.map(el => (el.id===id) && {...todoList, complited: !el.complited} )])
  }

  return (
    <div className="App">
      <header className='todoHeader'>
        TodoList: {todoList.length}
      </header>

      <TodoList AddItem={AddItem}
        items={todoList} 
        RemoveItem={RemoveItem}
        SetComplited={SetComplited} />
    </div>
  );
}

export default App;
