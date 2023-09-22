import React, { useContext, useState } from "react";

import {Text, View, TextInput, Button, StyleSheet} from 'react-native'
import { Context } from "../context/BlogContext";

const EditScreen = ({navigation})=>{
    const id = navigation.getParam('id')
    const {state, editBlogPost} = useContext(Context)
    

    const blogPost = state.find(blog=>
        blog.id === navigation.getParam('id')
    )

    const [title, setTitle] = useState(blogPost.title)

    return <View >
    <Text>Enter Your Title : </Text>
    <TextInput
    style={styles.input}
    value={title}
    onChangeText={text=>setTitle(text)}
    placeholder='Blog Post Title'
    />
    <Button title='Save Edit'
    onPress={()=>editBlogPost(id,title, ()=>{
        navigation.navigate('index')
    })
       
    }
    />
</View>
}

const styles = StyleSheet.create({
    input : {
        height : 50,
        backgroundColor : 'white',
        margin : 10,
        width : '80%',
        borderWidth : 2
    },
    
})

export default EditScreen