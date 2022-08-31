import {getTodo, deleteTodo} from '../services/todo_api'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function Todo() {
    const nav = useNavigate()
    const {id} = useParams()
    const [todo, setTodo] = useState({})
    useEffect(() => {getTodo(id)
    .then(res => setTodo(res.data))
    }, [])

    const deleteTheTodo = () => {
        deleteTodo(id) // service in todo api
        nav('/') //take us to home screen 
    }

    return (
        <div>
            <h1>Todo:</h1>
            <h3>{todo.description}</h3>
            Completed: <input type= 'checkbox' defaultChecked={todo.complete}/>
            <button onClick= {() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheTodo}>Delete</button>
            <button onClick={() => nav('/')}> Back To Main </button>
        </div>
    )
}

export default Todo