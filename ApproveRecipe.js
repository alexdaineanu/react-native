import * as React from "react";
import {TextInput, View, StyleSheet} from "react-native";
import Text from "react-native-elements/src/text/Text";
import Button from "react-native-elements/src/buttons/Button";
import firebase from "firebase/index";


export class ApproveRecipe extends React.Component {
    constructor() {
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
                    APPROVE RECIPE
                </Text>
                <TextInput
                    style={{width: "50%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.name = text}
                    placeholder={"Name"}>
                    {this.name}
                </TextInput>
                <TextInput
                    style={{width: "80%", height: "50%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.content = text}
                    placeholder={"Recipe"}>
                    {this.content}
                </TextInput>
                <Button title="Approve" onPress={() => {
                    item.setApproved(true);
                    firebase.database().ref("recipes").child(item.getId()).update(item);
                    refresh();
                    goBack();
                }}/>
                <Button title="Delete" onPress={() => {
                    item.setName(this.name);
                    item.setContent(this.content);
                    firebase.database().ref("recipes").child(item.getId()).remove();
                    refresh();
                    goBack();
                }}/>
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