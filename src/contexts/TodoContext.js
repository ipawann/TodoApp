import { createContext, useContext } from "react";

// create context

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            task : "todoMsg",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

//  create provider for this context

export const TodoProvider = TodoContext.Provider


// make custom hooks to use the context

export const useTodo = () =>{
    return useContext(TodoContext)
}