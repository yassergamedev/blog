import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";


const reducer = (state, action) =>{

    switch (action.type) {
        case 'add' : 
        return [...state, {title : `new blog ${state.length+ 1}`}]
        case 'remove':
            return state.pop()
        default:
            return state
    }
}

const addBlogPost = (dispatch)=>{
    return ()=>
        dispatch({type : 'add'})
    
}

export const {Context, Provider} = createDataContext(reducer, {addBlogPost}, [])


