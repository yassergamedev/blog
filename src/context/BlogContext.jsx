import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../../api/jsonServer";

const reducer = (state, action) =>{

    switch (action.type) {
        case 'get': 
            return action.payload
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

const getBlogPosts = dispatch =>{
    return async ()=>{
        const response = await jsonServer.get('/blogPosts')

        dispatch ({type : 'get', payload : response.data})
    }
}

const addBlogPost = (dispatch)=>{
    return ()=>
        dispatch({type : 'add'})
    
}
const deleteBlogPost = (dispatch)=>{
    return async (id)=>{
        await jsonServer.delete(`/blogPosts/${id}`)
        dispatch({type : 'delete',payload : id})
    }
       
   
}
const createBlogPost = (dispatch)=>{

    return async (title, callback)=>{
        // dispatch({type : 'create', payload : title})
        // callback();}
        await jsonServer.post('/blogposts', {title})
    
    }


}
const editBlogPost = (dispatch)=>{

    return async (id, title, callback)=>{

        await jsonServer.put(`/blogposts/${id}`, {title})
        dispatch({type : 'edit', payload :{ title, id}})
        callback();}
}

export const {Context, Provider} = createDataContext(reducer,
     {editBlogPost,addBlogPost,deleteBlogPost, createBlogPost, getBlogPosts}, [])


