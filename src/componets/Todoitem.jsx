import './Todoitem.css'

function Todoitem(props){
    let {id, completed, label} = props

    return(
        <li className="todoitem">
            <input 
            checked = {completed}
            onChange={() => (props.toggleTaskCompleted(id))}
            type="checkbox"
            />
            <label> {label} </label>
            <button onClick={() => (props.deleteTodo(id))}>Delete</button>
            <button onClick={() => (props.editTodo(id))}>Edit</button>
        </li>
    )
}

export default Todoitem