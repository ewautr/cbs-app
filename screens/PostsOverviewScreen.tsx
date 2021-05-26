import React, { useEffect, useState, useCallback } from "react";
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import PostItem from "../components/PostItem";
import Colors from "../constants/Colors";
import * as postsActions from "../store/actions/posts";

const PostsOverviewScreen = (props: any) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const posts = useSelector((state: any) => state.posts.posts);

  //function for loading posts
  const loadPosts = useCallback(async () => {
    setError("");
    setIsRefreshing(true);
    try {
      await dispatch(postsActions.fetchPosts());
    } catch (error) {
      setError(error.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  // fetch the posts anytime the user enters the page
  useEffect(() => {
    const willFocusSub = props.navigation.addListener("focus", loadPosts);

    // clean up the function
    return willFocusSub;
  }, [loadPosts, props.navigation]);

  // load posts (stays in the memory)
  useEffect(() => {
    // have to use .then(), because async is invalid in useEffect
    setIsLoading(true);
    loadPosts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadPosts]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occured.</Text>
        <Button title="Try again" onPress={loadPosts} />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.highlight} />
      </View>
    );
  }

  return (
    <FlatList
      onRefresh={loadPosts}
      refreshing={isRefreshing}
      data={posts}
      keyExtractor={(item: any) => item.id}
      renderItem={(itemData: any) => (
        <PostItem
          imageUrl={itemData.item.imageUrl}
          title={itemData.item.title}
          body={itemData.item.body}
          likes={itemData.item.likes.length}
          comments={itemData.item.comments.length}
          date={itemData.item.readableDate}
          authorName={itemData.item.authorName}
          authorImageUrl={itemData.item.authorImageUrl}
          onViewDetail={() => {
            props.navigation.navigate("PostDetailScreen", { postId: itemData.item.id, postTitle: itemData.item.title });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostsOverviewScreen;
