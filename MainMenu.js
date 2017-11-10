import {View, StyleSheet, TouchableOpacity, Text, BackHandler} from "react-native";
import * as React from "react";
import {Recipe} from "./Recipe";

export class HomeScreen extends React.Component {
    constructor(){
        super();
        this.recipes_list =[
            new Recipe("Apple Pie", "aaaa"),
            new Recipe("Banana Bread", "aaaa"),
            new Recipe("Cupcake", "aaaa"),
            new Recipe("Donut", "aaaa"),
            new Recipe("Eclair", "aaaa"),
            new Recipe("Froyo", "aaaa"),
            new Recipe("Gingerbread", "aaaa"),
            new Recipe("Honeycomb", "aaaa"),
            new Recipe("Ice Cream Sandwich", "aaaa"),
            new Recipe("Jelly Bean", "aaaa"),
            new Recipe("Kitkat", "aaaa"),
            new Recipe("Lollipop", "aaaa"),
            new Recipe("Marshmallow", "aaaa"),
        ];
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, alignSelf:"center"}}>
                FOOD MANAGER
                </Text>
                <TouchableOpacity
                    onPress={() => navigate('AddRecipe')}
                    style={styles.button}>
                    <Text style={styles.text}>
                        Add a recipe
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('MyRecipes', {recipes_list: this.recipes_list})}
                    style={styles.button}>
                    <Text style={styles.text}>
                        My Recipes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => BackHandler.exitApp()
                    }
                    style={styles.button}>
                    <Text style={styles.text}>
                        Exit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    button: {
        height: 100,
        marginTop: 10,
        backgroundColor: '#35fff0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
    }
});