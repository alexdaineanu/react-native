import * as React from "react";
import StackNavigator from "react-navigation/lib-rn/navigators/StackNavigator";
import {HomeScreen} from "./MainMenu";
import {AddRecipe} from "./AddRecipe";
import {MyRecipes} from "./MyRecipes";
import {EditRecipe} from "./EditRecipe";

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {headerTitle: 'Food Manager'},
    },
    AddRecipe:{
        screen: AddRecipe,
        navigationOptions: {headerTitle: 'AddRecipe'},

    },
    MyRecipes:{
        screen: MyRecipes,
        navigationOption: {headerTitle: 'MyRecipes'},
    },
    EditRecipe:{
        screen: EditRecipe,
        navigationOption: {headerTitle: 'Edit Recipe'},
    },
});

export default class App extends React.Component{
    render(){
        return <RootNavigator/>
    }
}
