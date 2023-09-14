import './TodoButtons.css'

function TodoButtons(props) {
    let {todos, setTodos} = props

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
            <div className='ButtonContainer'>
                <input id="newTodo" type='text' />
                <button onClick={() => { addTodo() }}>Write</button>
                <button onClick={() => { checkAll() }}>Check all</button>
                <button onClick={() => { unCheckAll() }}>Uncheck all</button>
                <button onClick={() => { deleteSelected() }}>Delete checked</button>
                <button onClick={() => { deleteAll() }}>Delete all</button>
            </div>
        </>
    )

}

export default TodoButtons