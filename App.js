import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import List from "./src/components/List/List";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          value: prevState.placeName,
          key: Math.random()+''
        }),
        placeName: ""
      };
    });
  };
  Ś;
  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== key)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          textChanged={this.placeNameChangeHandler}
          placeSubmitted={this.placeSubmitHandler}
        />
        <List
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 26,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
