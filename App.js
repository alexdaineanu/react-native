import * as React from "react";
import StackNavigator from "react-navigation/lib-rn/navigators/StackNavigator";
import {HomeScreen} from "./MainMenu";
import {AddRecipe} from "./AddRecipe";
import {MyRecipes} from "./MyRecipes";

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {headerTitle: 'Home'},
    },
    AddRecipe:{
        screen: AddRecipe,
        navigationOptions: {headerTitle: 'AddRecipe'},

    },
    MyRecipes:{
        screen: MyRecipes,
        navigationOption: {headerTitle: 'MyRecipes'},
    },
});

export default class App extends React.Component{
    render(){
        return <RootNavigator/>
    }
}
