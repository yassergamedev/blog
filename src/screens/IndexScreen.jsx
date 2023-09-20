import React, {useContext, useEffect} from "react";
import {View,Text,StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';
const IndexScreen =  ()=>{

    const {state, addBlogPost, deleteBlogPost}  = useContext(Context)
    
    return <View>
       
        <Button title="Add  Post" onPress={()=>{addBlogPost()}}/>
  
        <FlatList 
        data={state}
        keyExtractor={item => item.title}
        renderItem={({item})=>{
        return (
        <View style={styles.blog}>
            
            <Text style={{marginLeft : 10}}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
            <AntDesign  name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
        )}}/>
    </View>
}

const styles = StyleSheet.create({
    blog :  {
        flexDirection : 'row',
        justifyContent : 'space-between',
       padding : 10,
       borderTopWidth : 2,
       marginBottom : 3
    }
})

export default IndexScreen