import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PostDetail from "../components/PostDetail";

const PostScreen = () => {
    const posts = [
        { title: "Title#1", writer: "DANISH - Danish Social Innovation Club", dateTime: "3", likes: 200, comments: 23, description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet." },
        { title: "Title#2", writer: "DANISH", dateTime: "3", likes: 200, comments: 23, description: "lorem ipsum dolor sit amet. Hello" },
        { title: "Title#3", writer: "DANISH", dateTime: "3", likes: 200, comments: 23, description: "lorem ipsum dolor sit amet." }
    ];

    return <FlatList
        keyExtractor={item => item.title}
        data={posts}
        renderItem={({ item }) => {
            return <PostDetail title={item.title} writer={item.writer} dateTime={item.dateTime} likes={item.likes} comments={item.comments} description={item.description} />
        }}
    />
}

export default PostScreen;