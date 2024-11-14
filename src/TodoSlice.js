import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [{
        id: 1 ,
        title: "First Text",
        descp: "First Descp" 
    }]
};

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            state.todos.push({
                id: nanoid(),
                title: action.payload.title,
                descp: action.payload.descp

            })
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        deleteTodo: (state,action)=>{
            state.todos= state.todos.filter((todo)=>todo.id !== action.payload);
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        updateTodo: (state,action)=>{
            const {id, updateTitle,updateDescp}= action.payload;
            const todo= state.todos.find((todo)=>todo.id === id);
            if(todo){
                todo.title = updateTitle;
                todo.descp= updateDescp;
                localStorage.setItem("todos",JSON.stringify(state.todos))
            }
        }
    }
})


export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer;

  