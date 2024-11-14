import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { addTodo, deleteAllTodos} from '../TodoSlice';


function AddTodo() {

    const [title,setTitle]=React.useState();
    const [descp,setDescp]=React.useState();
    const dispatch= useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo({title,descp}))
        setDescp("");
        setTitle("");
        
    }



    
    // const handleDeleteAll = () => {
    //     console.log(deleteAllTodos())
    //     dispatch(deleteAllTodos());
        
    //   };

  return (
    <>
    <div className='container d-flex justify-content-center'>
    <form onSubmit={handleSubmit} className="col-md-6 col-xs-12 d-flex justify-content-center">
        <div className="col-11">
        <div className="col-12">
        <input
        type="text"
        className=""
        placeholder="Enter a Todo Title"
        value={title}
        required={true}
        onChange={(e)=>(setTitle(e.target.value))}
      />
        </div>
        <div className="col-12 d-flex justify-content-between">
        <textarea
        type="text"
        className="col-10"
        placeholder="Enter a Todo Description"
        required={true}
        value={descp}
        onChange={(e)=>(setDescp(e.target.value))}
      />
      <div className="col-2">
      <button
        type="submit"
        className="btn-grad add-btn"
      >
        Add Todo
      </button>
      </div>
      

        </div>
        {/* <button 
        className=''
        onClick={handleDeleteAll}>Delete All Todos</button> */}
        </div>


    </form>
    </div>
    </>

  )
}

export default AddTodo