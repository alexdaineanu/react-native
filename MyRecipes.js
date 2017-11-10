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
                              style={{
                                  height: 60,
                                  backgroundColor: "#32f0ff",
                                  borderRadius: 4,
                                  borderWidth: 0.5,
                                  borderColor: '#d6d7da',
                              }}
                              onPress={() => (
                                  navigate("EditRecipe", {
                                      item: item,
                                      refresh: this.onRefresh
                                  }))}>
                              <Text style={{flex: 1, fontSize: 16}}>
                                  {item.getName()}
                              </Text>
                          </TouchableOpacity>
                      }
            />
        )
    };
}