import React, {useContext, useEffect} from "react";
import {View,Text,StyleSheet, FlatList, Button} from 'react-native'
import {Context} from "../context/BlogContext";
const IndexScreen =  ()=>{
    const {state, addBlogPost} = useContext(Context)
    

   
    return <View>
        <Text>Index Screen</Text>
        <Button title="Add Blog Post" onPress={()=>{addBlogPost()}}/>
        <FlatList 
        data={state}
        keyExtractor={item => item.title}
        renderItem={({item})=>{
        return (<Text>{item.title}</Text>)}}/>
    </View>
}

const styles = StyleSheet.create({

})

export default IndexScreen