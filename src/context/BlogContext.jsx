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
        case 'create':
                return [...state, {id : Math.floor(Math.random()*9999), title : action.payload}]
                case 'edit':
                    {
                      const updatedState = state.map(blog => {
                        if (blog.id === action.payload.id) {
                            blog.title = action.payload.title
                           return {
                            ...state,blog
                           };
                        } else {
                          return state; // No change for non-matching blogs
                        }
                      });
                  
                      // Now, updatedState contains the updated array of blogs
                      // You can return it or use it in your component state, depending on your setup
                    }
                  
                
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
const createBlogPost = (dispatch)=>{

    return (title, callback)=>{
        dispatch({type : 'create', payload : title})
        callback();}
}
const editBlogPost = (dispatch)=>{

    return (id, title, callback)=>{
        dispatch({type : 'edit', payload :{ title, id}})
        callback();}
}

export const {Context, Provider} = createDataContext(reducer, {editBlogPost,addBlogPost,deleteBlogPost, createBlogPost}, [])


