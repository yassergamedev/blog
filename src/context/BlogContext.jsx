import React, { useReducer, useState } from "react";

const BlogContext = React.createContext()

const reducer = (state, action) =>{

    switch (action) {
        case 'add' : 
        return [...state, {title : `new blog ${state.length+ 1}`}]
        case 'remove':
            return state.pop()
        default:
            return state
    }

}

export const BlogProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, [{title : `blog post 0`}])


    const addBlogPost = ( )=>{
        setBlogPosts([...blogPosts, {title :`Blog Post #${blogPosts.length + 1}` }])
    }
    return <BlogContext.Provider value={{data : state, dispatch}}>
            {children}
    </BlogContext.Provider>
}

export default BlogContext