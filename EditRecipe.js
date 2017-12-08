import * as React from "react";
import {TextInput, View, StyleSheet} from "react-native";
import Text from "react-native-elements/src/text/Text";
import Button from "react-native-elements/src/buttons/Button";
import { Bar } from 'react-native-pathjs-charts'


export class EditRecipe extends React.Component {
    constructor() {
        super();
        this.name = '';
        this.content = '';
    }


    render() {
        let data = [
            [{
                "v": 49,
                "name": "apple"
            }, {
                "v": 42,
                "name": "apple"
            }],
            [{
                "v": 69,
                "name": "banana"
            }, {
                "v": 62,
                "name": "banana"
            }],
            [{
                "v": 29,
                "name": "grape"
            }, {
                "v": 15,
                "name": "grape"
            }]
        ]

        let options = {
            width: 300,
            height: 300,
            margin: {
                top: 20,
                left: 25,
                bottom: 50,
                right: 20
            },
            color: '#2980B9',
            gutter: 20,
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'bottom',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E',
                    rotate: 45
                }
            },
            axisY: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'left',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E'
                }
            }
        }
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
                    style={{width: "80%", height: "50%", borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.content = text}
                    placeholder={"Recipe"}>
                    {this.content}
                </TextInput>
                <Bar data={data} options={options} accessorKey='v'/>
                <Button title="Save" onPress={() => {
                    item.setName(this.name);
                    item.setContent(this.content);
                    AsyncStorage.getItem(item.getId().toString()).then((value) => {
                        let recipeJson = JSON.parse(value);
                        recipeJson['name'] = this.name;
                        recipeJson['content'] = this.content;
                        AsyncStorage.setItem(item.getId().toString(), JSON.stringify(recipeJson)).done();
                    }).done();
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