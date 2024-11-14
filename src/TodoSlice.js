import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [{
        id: nanoid() ,
        title: "First Title",
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
            console.log(state.todos.filter((todo)=>todo.id !== action.payload))
            state.todos= state.todos.filter((todo)=>todo.id !== action.payload);
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        // deleteAllTodos:(state,action)=>{
        //     localStorage.clear("todos");
        //     state.todos=[];
        //     console.log(localStorage.getItem("todos"))     
        //    },
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


export const {addTodo,updateTodo,deleteTodo,deleteAllTodos} = todoSlice.actions

export default todoSlice.reducer;

  