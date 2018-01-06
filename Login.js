import * as React from "react";
import firebase from 'firebase';
import {StyleSheet, TextInput, View} from "react-native";
import Text from "react-native-elements/src/text/Text";
import Button from "react-native-elements/src/buttons/Button";

export class LoginScreen extends React.Component {
    constructor() {
        super();
        this.email = 'alexdaineanu@gmail.com';
        this.password = 'parola';
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>LOGIN</Text>
                <TextInput
                    style={{width: "80%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(email) => this.email = email}
                    placeholder={"Email"}
                />
                <TextInput
                    style={{width: "80%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(password) => this.password = password}
                    secureTextEntry={true}
                    placeholder={"Password"}
                />
                <Button
                    title="Sign in"
                    onPress={() => {
                        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                            .then(function () {
                                alert("Welcome " + firebase.auth().currentUser.email + "!");
                                if (firebase.auth().currentUser.email === 'alexdaineanu@gmail.com') {
                                    navigate("AdminHomeScreen");
                                }
                                else {
                                    navigate("HomeScreen");
                                }
                            }).catch(function (error) {
                            alert(error.code);
                            alert(error.message);
                        });
                    }}
                        />
                        </View>
                        )
                        }
                }

                const styles=StyleSheet.create({
                container: {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#ecf0f1',
            },
                text: {
                fontSize: 20,
            }
            });