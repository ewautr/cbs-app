import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import SinglePostDetail from '../components/SinglePostDetail';

const SinglePostScreen = props => {
    const postId = props.route.params.postId;
    const selectedPost = useSelector(state => state.posts.availablePosts.find(post => post.id === postId));

    return (
        <ScrollView>
            <SinglePostDetail
                imageUrl={selectedPost.imageUrl}
                title={selectedPost.title}
                description={selectedPost.description}
                date={selectedPost.readableDate}
                likes={selectedPost.likes}
                comments={selectedPost.comments}
                author={selectedPost.author}
                authorLogo={selectedPost.authorLogo}
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({});

export default SinglePostScreen;