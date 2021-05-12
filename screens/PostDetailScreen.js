import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

import Comment from "../components/Comment";
import Colors from "../constants/Colors";

const PostDetailScreen = (props) => {
  const [inputText, setInputText] = useState("Add a comment");
  const [isFocused, setIsFocused] = useState(false);
  const postId = props.route.params.postId;
  const selectedPost = useSelector((state) => state.posts.posts.find((post) => post.id === postId));

  const submitNewComment = () => {
    console.log(inputText);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        {selectedPost.imageUrl ? <Image style={styles.image} source={{ uri: selectedPost.imageUrl }} /> : null}
        <View style={styles.container}>
          <Text style={styles.headline}>{selectedPost.title}</Text>
          <View style={styles.wrapperAuthor}>
            <Image style={styles.imgSmall} source={{ uri: selectedPost.authorImageUrl }} />
            <Text style={styles.author}>{selectedPost.authorName}</Text>
          </View>
          <View style={styles.detailsWrapper}>
            <Text style={styles.date}>{selectedPost.readableDate}</Text>
            <View style={styles.detailsWrapper}>
              <Text style={styles.likes}>
                <Ionicons name="thumbs-up-sharp" size={14} color="#5050A5" /> {selectedPost.likes.length}
              </Text>
              <Text style={styles.comments}>
                <Ionicons name="chatbox-ellipses-sharp" size={14} color="#5050A5" /> {selectedPost.comments.length}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.body}>{selectedPost.body}</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.detailsWrapper}>
            <Text style={styles.likesBig}>{selectedPost.likes.length} liked this</Text>
            <View style={styles.likeBtn}>
              <Ionicons name="thumbs-up-sharp" size={16} color="#5050A5" />
              <Button title="Like" color="#5050A5" style={styles.button} />
            </View>
          </View>
        </View>
        <FlatList
          data={selectedPost.comments}
          keyExtractor={(item) => item.key}
          renderItem={(itemData) => (
            <Comment authorName={itemData.item.authorName} authorImageUrl={itemData.item.authorImageUrl} body={itemData.item.body} date={itemData.item.date} likes={itemData.item.likes.length} />
          )}
        />
        <View style={styles.inputView}>
          <Image style={styles.inputImage} source={require("./../assets/6d38ab105ed32e0c25e4f82e1e9ccd2a.png")} />
          <TextInput
            style={styles.input}
            onFocus={() => {
              setInputText("");
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
              setInputText("Add a comment");
            }}
            onChangeText={(text) => {
              setInputText(text);
            }}
            value={inputText}
          />
          {isFocused && (
            <View style={styles.buttonView}>
              <Ionicons onPress={() => submitNewComment()} style={styles.buttonElement} name="chatbox-ellipses" size={22} color="#fff" />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFF",
  },
  scrollView: {},
  container: {
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  detailsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  date: {
    color: Colors.grayText,
    fontSize: 14,
  },
  comments: {
    color: "#5050A5",
    fontFamily: "OpenSans_700Bold",
    fontSize: 14,
  },
  likes: {
    marginRight: 20,
    color: "#5050A5",
    fontFamily: "OpenSans_700Bold",
    fontSize: 14,
  },
  likesBig: {
    fontSize: 16,
    color: "#32305D",
    fontFamily: "OpenSans_700Bold",
  },
  image: {
    width: "100%",
    height: 215,
  },
  headline: {
    fontSize: 26,
    color: "#333333",
    fontFamily: "Teko_700Bold",
  },
  body: {
    fontSize: 16,
    color: "#333333",
    fontFamily: "OpenSans_400Regular",
    lineHeight: 22,
  },
  topic: {
    color: "#5050A5",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  hr: {
    borderTopColor: "#EEEEEE",
    borderTopWidth: 1,
    marginTop: 30,
    marginBottom: 20,
  },
  imgSmall: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  wrapperAuthor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  interaction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  likeBtn: {
    color: "#5050A5",
    borderColor: "#5050A5",
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 16,
    fontFamily: "OpenSans_700Bold",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    fontWeight: "bold",
  },
  inputView: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: Colors.background,
    padding: 20,
    alignItems: "center",
    borderTopColor: Colors.backgroundHighlight,
    borderTopWidth: 1,
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
  buttonView: {
    backgroundColor: Colors.highlight,
    padding: 9,
    borderRadius: 5,
  },
  buttonElement: {
    color: "#fff",
  },
  inputImage: {
    marginTop: -5,
  },
});

export default PostDetailScreen;
