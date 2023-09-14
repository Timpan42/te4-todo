import './Todoitem.css'

function Todoitem(props) {
    let { id, completed, label } = props

    return (
        <li className="todoitem">
            <div className='felxContainer'>
                <input
                    checked={completed}
                    onChange={() => (props.toggleTaskCompleted(id))}
                    type="checkbox"
                />
                <label> {label} </label>
            </div>
            <div>
                <button className='itemButton' onClick={() => (props.deleteTodo(id))}>Delete</button>
                <button className='itemButton' onClick={() => (props.editTodo(id))}>Edit</button>
            </div>
        </li>
    )
}

export default Todoitem