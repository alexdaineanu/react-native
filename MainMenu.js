import {View, StyleSheet, TouchableOpacity, Text, BackHandler} from "react-native";
import * as React from "react";

export class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigate('AddRecipe')}
                    style={styles.button}>
                    <Text style={styles.text}>
                        Add a recipe
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('MyRecipes')}
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