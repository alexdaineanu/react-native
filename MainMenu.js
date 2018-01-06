import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import * as React from "react";
import firebase from "firebase";

export class HomeScreen extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, alignSelf: "center"}}>
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
                    onPress={() => navigate('MyRecipes')}
                    style={styles.button}>
                    <Text style={styles.text}>
                        My Recipes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        firebase.auth().signOut().then(function () {
                            navigate("LoginScreen");
                        }).catch(function (error) {
                            alert(error.code);
                            alert(error.message);
                        });
                    }
                    }
                    style={styles.button}>
                    <Text style={styles.text}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export class AdminHomeScreen extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, alignSelf: "center"}}>
                    ADMIN FOOD MANAGER
                </Text>
                <TouchableOpacity
                    onPress={() => navigate('MyRecipes')}
                    style={styles.button}>
                    <Text style={styles.text}>
                        My Recipes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        firebase.auth().signOut().then(function () {
                            navigate("LoginScreen");
                        }).catch(function (error) {
                            alert(error.code);
                            alert(error.message);
                        });
                    }
                    }
                    style={styles.button}>
                    <Text style={styles.text}>
                        Log Out
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