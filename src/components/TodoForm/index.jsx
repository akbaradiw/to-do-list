import react from 'react'
import { useState } from 'react'

const TodoForm = () => {
const [input, setInput] = useState("")

 const handleSubmit = (e) => {
    setInput(e.target.value)
}

return (
    <div>
        <input
        type="text"
        value={input}
        placeholder='Enter Todo'
        onChange={handleSubmit}/>
<button> add task </button>
    </div>
)
}



export default TodoForm