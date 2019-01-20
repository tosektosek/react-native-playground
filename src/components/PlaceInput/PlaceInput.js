import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const placeInput = props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      value={props.placeName}
      placeholder="write down your name please"
      onChangeText={props.textChanged}
    />
    <Button
      style={styles.placeButton}
      title="Add"
      onPress={props.placeSubmitted}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    // flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default placeInput;
