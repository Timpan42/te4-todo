import './App.css'
import Todoiteam from "./componets/Todoitem"

function App() {
  const todos = [
    { id: 0, label: "Kaffe", done: false },
    { id: 1, label: "Kaffe dålig", done: false }
  ]

const toggleTaskCompleted = (index) =>{
  console.log("toggleTaskCompleted", index)
}
  return (
    <>
      <div className='container'>
        <h1>Vill du göra sak?</h1>

        <ul className='todolist'>

        {todos.map((todo, index) =>
          <Todoiteam
            key={index}
            id ={todo.id}
            label={todo.label}
            done={todo.done}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        )}
        </ul>
      </div>
    </>
  )
}

export default App
