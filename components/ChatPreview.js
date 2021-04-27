import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChatPreview = props => {
  const navigation = useNavigation();

  const lastPos = props.chatroom.chatMessages.length - 1;
  let lastMessageText = "";
  let displayTime = "";
  if (lastPos > -1) {
    lastMessageText =
      props.chatroom.chatMessages[props.chatroom.chatMessages.length - 1]
        .message;
    const lastTime =
      props.chatroom.chatMessages[props.chatroom.chatMessages.length - 1]
        .createdDate;

    // Should only do this if on the same date as today...
    displayTime = lastTime.getHours() + ":" + lastTime.getMinutes();
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatConversationScreen", {
          id: props.chatroom.id
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require("./../assets/ac99082f65d5c636e14e70785817899e.png")}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>{props.chatroom.name}</Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.message}>
            {lastMessageText}
          </Text>
        </View>
        <View style={styles.dotView}>
          <View style={styles.dot}></View>
          <Text>{displayTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  image: {
    paddingRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.46,
    elevation: 9
  },
  textView: {
    paddingLeft: 5,
    paddingRight: 5,
    width: "65%"
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 15
  },
  message: {
    fontSize: 15
  },
  dotView: {
    marginLeft: "auto",
    alignItems: "flex-end"
  },
  dot: {
    height: 12,
    width: 12,
    backgroundColor: "#5050A5",
    borderRadius: 100 / 2,
    marginBottom: 10
  }
});

export default ChatPreview;
