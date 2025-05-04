import { useEffect, useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import { addToDo, getToDos, updateToDo, deleteToDo } from './utils/handleApi'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDoText, setToDoText] = useState('')
  const[isUpdating, setIsUpdating] = useState(false)
  const[toDoId, setToDoId] = useState('') 

  const updateMode = (id, text) => {
    setToDoText(text)
    setIsUpdating(true)
    setToDoId(id)
  }

  {console.log(toDos)}
  useEffect(() => { getToDos(setToDos) }, [])
  return (
    <div className="App">
    <div className="container">
      <h1>To Do App</h1>
      <div className="top">
        <input className='input'
         type="text" placeholder="Add a new task" 
         value={toDoText}
          onChange={(e) => setToDoText(e.target.value)}
         />
        <div className="add" onClick={isUpdating ? ()=> updateToDo(toDoId,toDoText, setToDoText, setToDos, setIsUpdating ) : ()=> addToDo(toDoText, setToDoText, setToDos)}>
          {isUpdating ? "Update": "Add"}</div>
      </div>
      <div className="todolist">
        {toDos.map(item => <ToDo 
        key = {item._id}
         text={item.text} 
         updateMode = {()=> updateMode(item._id, item.text)}
         deleteToDo={()=> deleteToDo(item._id,setToDos )}/>)}
      </div>
    </div>
    </div>
  )
}

export default App
