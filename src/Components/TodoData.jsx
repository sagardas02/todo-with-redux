import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {updateTodo,deleteTodo} from "../TodoSlice"

function TodoData() {
const [updateTitle,setUpdateTitle] = useState("");
const [updateDescp,setUpdateDescp] = useState("");
const [editingId,setEditingId] = useState("")
const todos = useSelector((state)=>state.todos)
const dispatch= useDispatch()

const handleEdit= (todo)=>{
    setEditingId(todo.id)
    setUpdateDescp(todo.descp);
    setUpdateTitle(todo.title);
}
const handleSave= (id)=>{
    dispatch(updateTodo({id,updateTitle,updateDescp}));
    setEditingId("")
    setUpdateDescp("");
    setUpdateTitle("");
}
console.log(todos)
  return (
    <>
    <div className="container">
    <h1 className='text-center'>Todos Posts</h1>
    <div className="col-12 d-flex justify-content-center">
    <div className="cards col-8">
    <ul className="list-none">
    {todos.map((todo)=>(
        <li
        className=""
        key={todo.id}
    >
            {editingId === todo.id ? 
                <>
                <input type="text"
                    value={updateTitle}
                    required={true}
                    onChange={(e)=>setUpdateTitle(e.target.value)} 
                    placeholder='Title'/>
                <textarea type="text"
                    value={updateDescp}
                    required={true}
                    onChange={(e)=>setUpdateDescp(e.target.value)}
                    placeholder='Description' />
                </>
                
            :
            
                <>
                <div className='todo-title'>{todo.title}</div>
                <div className='todo-descp'>{todo.descp}</div>
                </>
                
            
            }
            {editingId === todo.id ?
                <button
                className="text-white"
                onClick={()=>handleSave(todo.id)}>Save</button>
            :
                <button 
                className="text-white"
                onClick={()=>handleEdit(todo)}>edit</button>
            }
            
            
            
            
            
            <button
            className="text-white"
             onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
    ))}
      </ul>
    </div>
    </div>


    </div>
    

    </>
  )
}

export default TodoData