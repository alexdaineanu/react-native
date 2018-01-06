import * as React from "react";
import StackNavigator from "react-navigation/lib-rn/navigators/StackNavigator";
import {HomeScreen} from "./MainMenu";
import {AddRecipe} from "./AddRecipe";
import {MyRecipes} from "./MyRecipes";
import {EditRecipe} from "./EditRecipe";
import {LoginScreen} from "./Login";
import {AdminHomeScreen} from "./MainMenu";
import firebase from "firebase/index";

const RootNavigator = StackNavigator({
    LoginScreen: {
      screen: LoginScreen,
      navigationOption: {headerTitle: 'Login'},
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {headerTitle: 'Food Manager'},
    },
    AdminHomeScreen: {
        screen: AdminHomeScreen,
        navigationOptions: {headerTitle: 'Admin Food Manager'},
    },
    AddRecipe: {
        screen: AddRecipe,
        navigationOptions: {headerTitle: 'AddRecipe'},

    },
    MyRecipes: {
        screen: MyRecipes,
        navigationOption: {headerTitle: 'MyRecipes'},
    },
    EditRecipe: {
        screen: EditRecipe,
        navigationOption: {headerTitle: 'Edit Recipe'},
    },
});



export default class App extends React.Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyAEVLXNgdHFeqr2_58OCeipPiu4nDfoLlY",
            authDomain: "foodmanagerreact.firebaseapp.com",
            databaseURL: "https://foodmanagerreact.firebaseio.com",
            projectId: "foodmanagerreact",
            storageBucket: "",
            messagingSenderId: "505316351467"
        };
        firebase.initializeApp(firebaseConfig);
        firebase.auth().signOut();
    }
    render() {
        return <RootNavigator/>
    }
}
