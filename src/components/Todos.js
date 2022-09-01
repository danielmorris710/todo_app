import {getTodos} from '../services/todo_api'
import {useState, useEffect} from 'react'
import Create from './CreateTodo'

export default function Todos() {

 const [todos, setTodos] = useState([])
    useEffect(()=>{ getTodos()
        .then(res => setTodos(res.data))
    },[todos])
    console.log(todos)

    return(
    <div>
        <ul>
        {todos.map((todo) => {
            return (
            <li><a href={`/${todo._id}`}>{todo.description}</a>
            </li>
            )
        })}
        
        </ul>
        {<Create />}
    </div>
    )
    
}
