import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

const initList = ['1', '2', '5']
function App() {

  const [todoList, setTodoList] = useState(initList)

  const AddItem = (newItem) => {
    setTodoList([...todoList, newItem])
  }

  return (
    <div className="App">
      <header className='todoHeader'>
      TodoList: {todoList.length}
      </header>

      <TodoList AddItem={AddItem}
      items={todoList} />
    </div>
  );
}

export default App;
