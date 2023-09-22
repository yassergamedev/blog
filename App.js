
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateBlogPost";
import { AntDesign } from '@expo/vector-icons';
import {Text, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import EditScreen from "./src/screens/EditScreen";
const navigation = createStackNavigator({
  index : IndexScreen,
  Show : ShowScreen,
  Create : CreateScreen,
  Edit : EditScreen
},
{
  initialRouteName : 'index',
  defaultNavigationOptions : {
    title : 'Blogs'
  }
})
IndexScreen.navigationOptions = ({navigation})=>{
  return {
     
      headerRight:<TouchableOpacity onPress={()=>navigation.navigate('Create')}>
         <AntDesign name="plus" size={24} color="black" style={{
        marginRight : 10
      }}/>
      </TouchableOpacity>,
    };
}

ShowScreen.navigationOptions = ({navigation})=>{

  return {
    headerRight : <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id : navigation.getParam('id') })}>
      <Entypo name="edit" size={24} color="black" />
    </TouchableOpacity>
  }
}
const App =  createAppContainer(navigation)

export default (()=>{
  return <Provider><App /></Provider>
})