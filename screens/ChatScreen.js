import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { CHATROOM } from "./../data/dummy-data";
import ChatPreview from "../components/ChatPreview";

const ChatScreen = (props) => {
  return (
    <View>
      <FlatList data={CHATROOM} renderItem={(itemData) => <ChatPreview chatroom={itemData.item}></ChatPreview>} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatScreen;
