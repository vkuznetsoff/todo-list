import { useRef, useState } from "react"
import TodoItems from "./TodoItems"


const TodoList = ({items}) => {



const RemoveItem = () => {

}

const handleInput = (e) => {
     
    setUserInput(e.currentTarget.value)
}

const [userInput, setUserInput] = useState('')

    return (
        <div>

            <input value={userInput} type='text' onChange={handleInput}/>
            <button onClick={() => {}}>Add</button>
            <div>
                <TodoItems items={items} />
            </div>
            
        </div>
    )
}

export default TodoList