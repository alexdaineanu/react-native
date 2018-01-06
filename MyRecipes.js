import * as React from "react";
import {FlatList, RefreshControl, TouchableOpacity} from "react-native";
import {Recipe} from "./Recipe";
import Text from "react-native-elements/src/text/Text";
import firebase from "firebase/index";


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
        if (firebase.auth().currentUser.email === 'alexdaineanu@gmail.com') {
            firebase.database().ref().child("recipes").on('value', (childSnapshot) => {
                childSnapshot.forEach((doc) => {
                    let recipe = new Recipe(doc.toJSON().name, doc.toJSON().content, doc.toJSON().id, doc.toJSON().email, doc.toJSON().approved);
                    this.recipes_list.push(recipe);
                })
            });
            this.setState({refreshing: false});
        }
        else {
            firebase.database().ref().child("recipes").on('value', (childSnapshot) => {
                childSnapshot.forEach((doc) => {
                    if (doc.toJSON().email === firebase.auth().currentUser.email || doc.toJSON().approved) {
                        let recipe = new Recipe(doc.toJSON().name, doc.toJSON().content, doc.toJSON().id, doc.toJSON().email, doc.toJSON().approved);
                        this.recipes_list.push(recipe);
                    }
                });
            });
            this.setState({refreshing: false});
        }
    }

    componentWillMount() {
        this.onRefresh();
    }

    render() {
        const {navigate} = this.props.navigation;
        if (this.state.refreshing)
            return (
                <Text>Loading...</Text>
            );
        return (
            <FlatList containerStyle={{marginBottom: 20}}
                      data={this.recipes_list}
                      extraData={this.state}
                      refreshControl={<RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this.onRefresh}
                      />}
                      keyExtractor={(item, index) => index}
                      renderItem={({item}) => {
                          return (
                              <TouchableOpacity
                                  style={{
                                      height: 60,
                                      backgroundColor: "#32f0ff",
                                      borderRadius: 4,
                                      borderWidth: 0.5,
                                      borderColor: '#d6d7da',
                                  }}
                                  onPress={() => {
                                      if (firebase.auth().currentUser.email === 'alexdaineanu@gmail.com') {
                                          navigate("ApproveRecipe", {
                                              item: item,
                                              refresh: this.onRefresh
                                          })
                                      }
                                      else {
                                          navigate("EditRecipe", {
                                              item: item,
                                              refresh: this.onRefresh
                                          })
                                      }
                                  }}
                                  onLongPress={() => {
                                      firebase.database().ref("recipes").child(item.getId()).remove();
                                      this.onRefresh();
                                  }}
                              >
                                  <Text style={{flex: 1, fontSize: 16}}>
                                      {item.getName()}
                                  </Text>
                                  <Text style={{flex: 1, fontSize: 16}}>
                                      Approved: {item.getApproved().toString()}
                                  </Text>
                              </TouchableOpacity>
                          )
                      }
                      }
            />
        )
    };
}