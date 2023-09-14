import { useEffect, useState } from 'react'
import Todoitem from './Todoitem'
import TodoButtons from './TodoButtons'



function TodoList() {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
 
    const toggleTaskCompleted = (id) => {
        const newTodos = todos.map(todo => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : todo
        })
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        })
        setTodos(newTodos)
    }

    const addTodo = () => {
        const newTodo = document.getElementById('newTodo').value
        if (newTodo === '') return
        const newTodos = [...todos, { id: localStorage.getItem('index'), label: newTodo, completed: false }]
        localStorage.setItem('index', parseInt(localStorage.getItem('index')) + 1 || parseInt(todos.lenght) + 1)
        setTodos(newTodos)
    }

    const checkAll = () => {
        const allTrue = 0
        const newTodos = todos.map(todo => {
                return todo.completed === false ? { ...todo, completed: !todo.completed } : todo
        })
        setTodos(newTodos)
    }

    const unCheckAll = () => {
        const allTrue = 0
        const newTodos = todos.map(todo => {
                return todo.completed === true ? { ...todo, completed: !todo.completed } : todo
        })
        setTodos(newTodos)
    }

    const deleteSelected = () => {
        const newTodos = todos.filter (todo => todo.completed === true ? null : todo)
        setTodos(newTodos)
    }

    const deleteAll = () => {
        setTodos([])
        localStorage.setItem('index', 0)
    }
    
    return (
        <>
            <TodoButtons
                addTodo = {addTodo}
                checkAll = {checkAll}
                unCheckAll = {unCheckAll}
                deleteSelected = {deleteSelected}
                deleteAll = {deleteAll}
            />
            <ul className='todolist'>
                {todos.map((todo, index) =>
                    <Todoitem
                        key={index}
                        id={todo.id}
                        label={todo.label}
                        completed={todo.completed}
                        toggleTaskCompleted={toggleTaskCompleted}
                        deleteTodo={deleteTodo}
                    />
                )}
            </ul>
        </>
    )
}

export default TodoList