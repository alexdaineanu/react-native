import * as React from "react";
import {TextInput, View, StyleSheet} from "react-native";
import Text from "react-native-elements/src/text/Text";
import Button from "react-native-elements/src/buttons/Button";

export class EditRecipe extends React.Component {
    constructor(){
        super();
        this.name = '';
        this.content = '';
    }
    render() {
        const {goBack} = this.props.navigation;
        const {item} = this.props.navigation.state.params;
        const {refresh} = this.props.navigation.state.params;
        this.name = item.getName();
        this.content = item.getContent();

        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>
                    EDIT RECIPE
                </Text>
                <TextInput
                    style={{width: "50%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.name = text}
                    placeholder={"Name"}>
                    {this.name}
                </TextInput>
                <TextInput
                    style={{width: "80%", height: "80%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.content = text}
                    placeholder={"Recipe"}>
                    {this.content}
                </TextInput>
                <Button title="Save" onPress={() => {
                    item.setName(this.name);
                    item.setContent(this.content);
                    refresh();
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
        alignItems: 'center',
        backgroundColor: "#32f0ff",
    },

});