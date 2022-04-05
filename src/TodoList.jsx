import { useRef, useState } from "react"
import TodoItems from "./TodoItems"


const TodoList = ({ items, AddItem, RemoveItem, SetComplited }) => {

    const handleButton = () => {
        AddItem(userInput)
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            handleButton()
        }
    }

    const handleInput = (e) => {

        setUserInput(e.currentTarget.value)
    }

    const [userInput, setUserInput] = useState('')

    return (
        <div >
            <input value={userInput} onKeyDown={handleKeyPress} type='text'
                onChange={handleInput} />
                
            <button onClick={handleButton}>Add</button>

            <div className="todoList">
                <TodoItems items={items} removeItem={RemoveItem} RemoveItem={RemoveItem}
                    SetComplited={SetComplited} />
            </div>

        </div>
    )
}

export default TodoList