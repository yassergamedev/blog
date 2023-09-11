import React, {useContext} from "react";
import {View,Text,StyleSheet, FlatList} from 'react-native'
import BlogContext from "../context/BlogContext";
const IndexScreen =  ()=>{
    const blogs = useContext(BlogContext)
    console.log(blogs)
    return <View>
        <Text>Index Screen</Text>
        <FlatList 
        data={blogs}
        keyExtractor={item => item.title}
        renderItem={({item})=>{
        return (<Text>{item.title}</Text>)}}/>
    </View>
}

const styles = StyleSheet.create({

})

export default IndexScreen