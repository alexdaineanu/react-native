import * as React from "react";
import {Button, TextInput, View, StyleSheet, Text} from "react-native";
import * as Communications from "react-native-communications";

export class AddRecipe extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>
                    SEND AN EMAIL
                </Text>
                <TextInput
                    style={{width: "50%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.setState({email: text})}
                    placeholder={"To"}
                />
                <TextInput
                    style={{width: "80%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.setState({subject: text})}
                    placeholder={"Subject"}
                />
                <TextInput
                    style={{width: "80%", height: "50%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.setState({content: text})}
                    placeholder={"Content"}
                />
                <Button title="Send Email"
                        onPress={() => Communications.email([this.state.email, this.state.email], null, null, this.state.subject, this.state.content)}>
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