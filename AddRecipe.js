import * as React from "react";
import {Button, TextInput, View, StyleSheet, Text} from "react-native";
import firebase from 'firebase';

export class AddRecipe extends React.Component {
    constructor(){
        super();
        this.name = '';
        this.content = '';
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>
                    ADD A RECIPE
                </Text>
                <TextInput
                    style={{width: "80%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.name = text}
                    placeholder={"Subject"}
                />
                <TextInput
                    style={{width: "80%", height: "50%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.content = text}
                    placeholder={"Content"}
                />
                <Button title="ADD RECIPE"
                        onPress={() => {
                            let id = firebase.database().ref().child('recipes').push().key;
                            firebase.database().ref('recipes').child(id).update({
                                id: id,
                                name: this.name,
                                content: this.content,
                                email: firebase.auth().currentUser.email,
                                approved: false
                            });
                            goBack();
                        }}>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5ffff7',
        alignItems: 'center',
        justifyContent: 'center',
    },

});