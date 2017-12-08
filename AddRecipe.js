import * as React from "react";
import {Button, TextInput, View, StyleSheet, Text, AsyncStorage, Picker} from "react-native";

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
                            AsyncStorage.getAllKeys().then((value) => {
                                let current_id = -1;
                                for (let i = 0; i < value.length; i++) {
                                    const id = parseInt(value[i], 10);
                                    if (id > current_id) {
                                        current_id = id;
                                    }
                                }
                                current_id++;
                                AsyncStorage.setItem(current_id.toString(), JSON.stringify({"id": current_id, "name": this.name, "content": this.content})).done();
                            }).done();
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