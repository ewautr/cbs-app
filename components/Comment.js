import React from "react";
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Colors from "../constants/Colors";

const Comment = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.authorImageUrl }} />
      <View style={styles.main}>
        <Text style={styles.name}>{props.authorName}</Text>
        <Text style={styles.body}>{props.body}</Text>
        <View style={styles.footer}>
          <Text style={styles.date}>{props.date}</Text>
          <Text style={styles.likes}>{props.likes} likes</Text>
        </View>
      </View>
      <View style={styles.like}>
        <Ionicons style={styles.icon} name="thumbs-up-outline" size={12} color={Colors.grayText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  name: {
    fontWeight: "bold",
  },
  body: {},
  footer: {
    flexDirection: "row",
    marginTop: 10,
  },
  date: {
    color: Colors.grayText,
    marginRight: 10,
  },
  likes: {
    fontWeight: "bold",
    color: Colors.grayText,
  },
  like: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.grayText,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Comment;
