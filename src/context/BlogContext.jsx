import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";


const reducer = (state, action) =>{

    switch (action.type) {
        case 'add' : 
        return [...state, {id : Math.floor(Math.random()*9999), title : `new blog ${state.length+ 1}`}]
        case 'delete':
            return (state.filter(blogPost=>
                blogPost.id !== action.payload
            ))
        default:
            return state
    }
}

const addBlogPost = (dispatch)=>{
    return ()=>
        dispatch({type : 'add'})
    
}
const deleteBlogPost = (dispatch)=>{
    return (id)=>
        dispatch({type : 'delete', payload : id})
    
}

export const {Context, Provider} = createDataContext(reducer, {addBlogPost,deleteBlogPost}, [])


