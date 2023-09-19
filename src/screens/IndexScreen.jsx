import React, {useContext, useEffect} from "react";
import {View,Text,StyleSheet, FlatList, Button} from 'react-native'
import BlogContext from "../context/BlogContext";
const IndexScreen =  ()=>{
    const {data,dispatch} = useContext(BlogContext)
    

   
    return <View>
        <Text>Index Screen</Text>
        <Button title="Add Blog Post" onPress={()=>{dispatch('add')}}/>
        <FlatList 
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item})=>{
        return (<Text>{item.title}</Text>)}}/>
    </View>
}

const styles = StyleSheet.create({

})

export default IndexScreen