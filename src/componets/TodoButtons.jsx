import './TodoButtons.css'

function TodoButtons(props) {

    return (
        <>
            <div className='ButtonContainer'>
                <input id="newTodo" type='text' />
                <button onClick={() => { props.addTodo() }}>Write</button>
                <button onClick={() => { props.checkAll() }}>Check all</button>
                <button onClick={() => { props.unCheckAll() }}>Uncheck all</button>
                <button onClick={() => { props.deleteSelected() }}>Delete checked</button>
                <button onClick={() => { props.deleteAll() }}>Delete all</button>
            </div>
        </>
    )

}

export default TodoButtons