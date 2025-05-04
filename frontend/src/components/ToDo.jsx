import React from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'

const ToDo = ({_id, text, updateMode,deleteToDo }) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <BiEdit  className="edit" onClick={updateMode}/>
            <BiTrash className="delete"  onClick={deleteToDo} />
        </div>
    </div>
  )
}

export default ToDo
