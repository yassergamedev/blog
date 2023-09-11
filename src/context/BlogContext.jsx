import React, { useState } from "react";

const BlogContext = React.createContext()

const [blogPosts, setBlogPosts] = useState([])

const addBlogPost = ( )=>{
    setBlogPosts([...blogPosts, {title :`Blog Post #${blogPosts.length + 1}` }])
}

export const BlogProvider = ({children})=>{
    return <BlogContext.Provider value={{data : blogPosts, addBlogPost}}>
            {children}
    </BlogContext.Provider>
}

export default BlogContext