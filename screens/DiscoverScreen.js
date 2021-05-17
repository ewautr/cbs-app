import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DiscoverScreen = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>All Posts</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: "#30a181",
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    textTransform: "uppercase",
  },
});

export default DiscoverScreen;
