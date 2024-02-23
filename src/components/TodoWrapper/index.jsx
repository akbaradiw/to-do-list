import React, {useState} from 'react'
import TodoForm from '../TodoForm'
const TodoWrapper = () => {
// const[todo, setTodo] = useState([])

// const addTodo = (todo) => {
//     const [input, setInput] = useState("")
//     const [todo, setTodo] = useState([])
// }

    return (
        <div>
            <TodoForm
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo} />
        </div>
    )
}

export default TodoWrapper