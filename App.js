
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";
const navigation = createStackNavigator({
  index : IndexScreen

},
{
  initialRouteName : 'index',
  defaultNavigationOptions : {
    title : 'Blogs'
  }
})

const App =  createAppContainer(navigation)

export default (()=>{
  return <BlogProvider><App /></BlogProvider>
})