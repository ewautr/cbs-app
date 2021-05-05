import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const SinglePostScreen = props => {
    const postId = props.route.params.postId;
    const selectedPost = useSelector(state => state.posts.availablePosts.find(post => post.id === postId));

    return (
        <View>
            <Text>{selectedPost.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SinglePostScreen;