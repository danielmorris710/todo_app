// this file will be our endpoint routes
import axios from 'axios'
const baseURL ='https://dam-express-api.herokuapp.com/todos'

export const getTodos = () => {
    const URL = baseURL
    const response = axios.get(URL)
    return response
}

export const getTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL) 
    return response
}

export const deleteTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}

export const editTodo = (id, updatedTodo) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedTodo)
    return response
}

export const createTodo = (todo) => {
    const URL = baseURL
    const response = axios.post(URL, todo)
    return response
}