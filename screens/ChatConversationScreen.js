import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList, TextInput, Image } from "react-native";

import { CHATROOM } from "../data/dummy-data";
import Colors from "../constants/Colors";

const ChatConversationScreen = (props) => {
  const chatId = props.route.params.id;
  const chatMessages = CHATROOM.find((room) => room.id === chatId).chatMessages;

  const [inputText, setInputText] = useState("Write message");

  return (
    <View style={styles.container}>
      <View style={styles.messages}>
        <FlatList data={chatMessages} renderItem={(itemData) => <Text>hi</Text>}></FlatList>
      </View>
      <View style={styles.inputView}>
        <Image style={styles.image} source={require("./../assets/6d38ab105ed32e0c25e4f82e1e9ccd2a.png")} />
        <TextInput
          style={styles.input}
          onFocus={() => {
            setInputText("");
          }}
          onChangeText={(text) => {
            setInputText(text);
          }}
          value={inputText}
        />
        <View style={styles.buttonView}>
          <Button style={styles.button} title="Send"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  messages: {
    flex: 1,
  },
  inputView: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: Colors.background,
    padding: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.backgroundHighlight,
    marginLeft: 10,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  image: {
    marginTop: -5,
  },
  buttonView: {
    backgroundColor: Colors.highlight,
  },
  button: {
    color: "#fff",
  },
});

export default ChatConversationScreen;
