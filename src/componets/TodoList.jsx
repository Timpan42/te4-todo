import { useEffect, useState } from 'react'
import Todoitem from './Todoitem'



function TodoList() {
    const [todos, setTodos] = useState (() => {
     return JSON.parse(localStorage.getItem('todos')) || []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = () =>{
        const newTodo = document.getElementById('newTodo').value
        if(newTodo === '') return
        const newTodos = [...todos, {id: todos.length + 1, label: newTodo, completed: false}]
        setTodos(newTodos)
    }

    const toggleTaskCompleted = (id) => {
        const newTodos = todos.map(todo => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : todo
        })
        setTodos(newTodos)
    }

    const deleteTodo = (id) =>{
        const newTodos = todos.filter(todo =>{
            return todo.id !== id
        })
        setTodos(newTodos)
    }

  

    return (
        <>
        <input id="newTodo" type='text'/>
        <button onClick={() => {addTodo()}}>Skriv</button>
        <button onClick={() => {setTodos([])}}>Delete all</button>
        <ul className='todolist'>
            {todos.map((todo, index) =>
                <Todoitem
                    key={index}
                    id={todo.id}
                    label={todo.label}
                    completed={todo.completed}
                    toggleTaskCompleted={toggleTaskCompleted}
                    deleteTodo ={deleteTodo}
                />
            )}
        </ul>
        </>
    )
}

export default TodoList