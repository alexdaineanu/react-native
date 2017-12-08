import * as React from "react";
import {AsyncStorage, FlatList, RefreshControl, TouchableOpacity, View} from "react-native";
import {Recipe} from "./domain/Recipe";
import Text from "react-native-elements/src/text/Text";


export class MyRecipes extends React.Component {
    constructor() {
        super();
        this.onRefresh = this.onRefresh.bind(this);
        this.recipes_list = [];
        this.state = {
            refreshing: false,
        };
    };

    onRefresh() {
        this.setState({refreshing: true});
        this.recipes_list = [];
        AsyncStorage.getAllKeys().then((value1) => {
            for(let i = 0 ; i < value1.length; i++){
                AsyncStorage.getItem(value1[i]).then((value2) => {
                    let recipeJson = JSON.parse(value2);
                    let recipe = new Recipe(recipeJson['name'], recipeJson['content']);
                    recipe.setId(recipeJson['id']);
                    if(recipeJson['id'] !== null)
                        this.recipes_list.push(recipe);
                }).done();
            }
        }).then(this.setState({refreshing: false})).done();
    }

    componentWillMount() {
        this.onRefresh();
    }
    render() {
        const {navigate} = this.props.navigation;
        if (this.state.refreshing) {
            return <View><Text>Loading...</Text></View>;
        }
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
                                  }))}
                              onLongPress={() => {
                                  AsyncStorage.getItem(item.getId().toString()).then((value) => {
                                      let recipeJson = JSON.parse(value);
                                      recipeJson['id'] = null;
                                      AsyncStorage.setItem(item.getId().toString(), JSON.stringify(recipeJson)).done();
                                  }).then(alert("Deleted item!")).then(this.onRefresh()).done();
                              }}
                          >
                              <Text style={{flex: 1, fontSize: 16}}>
                                  {item.getName()}
                              </Text>
                          </TouchableOpacity>
                      }
            />
        )
    };
}