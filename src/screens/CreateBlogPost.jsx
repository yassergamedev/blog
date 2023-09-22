import React, {useContext, useState} from 'react'

import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({navigation})=>{

    const [title, setTitle] = useState('hi')
    const {createBlogPost} = useContext(Context)
    



    return <View >
        <Text>Enter Your Title : </Text>
        <TextInput
        style={styles.input}
        value={title}
        onChangeText={text=>setTitle(text)}
        placeholder='Blog Post Title'
        />
        <Button title='Create'
        onPress={()=>createBlogPost(title, ()=>{
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

export default CreateScreen