import './Todoitem.css'

function Todoitem(props){
    let {id, completed, label} = props

    return(
        <li className="todoitem">
            <label> {label} </label>
            <input 
            checked = {completed}
            onChange={() => (props.toggleTaskCompleted(id))}
            type="checkbox"
            />
            <button onClick={() => (props.deleteTodo(id))}>Delete</button>
        </li>
    )
}

export default Todoitem