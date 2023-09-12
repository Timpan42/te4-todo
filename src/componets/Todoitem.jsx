import './Todoitem.css'

function Todoitem(props){
    let {id, done, label} = props

    return(
        <li className="todoitem">
            <label> {label} </label>
            <input 
            checked = {done}
            onChange={() => (props.toggleTaskCompleted(id))}
            type="checkbox"
            />
        </li>
    )
}

export default Todoitem