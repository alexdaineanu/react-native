import * as React from "react";
import {FlatList, RefreshControl, StyleSheet, TouchableOpacity} from "react-native";
import Text from "react-native-elements/src/text/Text";


export class MyRecipes extends React.Component {
    constructor() {
        super();
        this.onRefresh = this.onRefresh.bind(this);
        this.state = {
            refreshing: false,
        };
    };

    onRefresh() {
        this.setState({refreshing: true});
        this.setState({refreshing: false});
    }

    render() {
        this.recipes_list = this.props.navigation.state.params.recipes_list;
        const {navigate} = this.props.navigation;
        return (
            <FlatList containerStyle={{marginBottom: 20}}
                      data={this.recipes_list}
                      extraData={this.state}
                      refreshControl={<RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this.onRefresh}
                      />}
                      keyExtractor={(item, index) => index}
                      renderItem={({item}) =>
                      <TouchableOpacity
                          style={{height: 60,
                              backgroundColor: "#32f0ff",
                              borderRadius: 4,
                              borderWidth: 0.5,
                              borderColor: '#d6d7da',}}
                          onPress={() => (
                          navigate("EditRecipe", {
                              item: item,
                              refresh: this.onRefresh
                          }))}>
                          <Text style={{flex:1, fontSize: 16}}>
                              {item.getName()}
                          </Text>
                      </TouchableOpacity>
                      }
            />
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});