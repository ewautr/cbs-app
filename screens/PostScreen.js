import React from 'react';
import { FlatList } from 'react-native';
import PostDetail from "../components/PostDetail";
import { useSelector } from 'react-redux';
// import Posts from '../store/reducers/Posts';

const PostsOverviewScreen = (props) => {
    const posts = useSelector(state => state.posts.availablePosts);
    return (
        <FlatList
            data={posts}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PostDetail
                    title={itemData.item.title}
                    description={itemData.item.description}
                    onViewDetail={() => {
                        props.navigation.navigate('SinglePostScreen', { postId: itemData.item.id, postTitle: itemData.item.title });
                    }} />
            )} />
    )
};

export default PostsOverviewScreen;

// const PostScreen = () => {
//     const posts = [
//         { title: "Title#1", writer: "DANISH - Danish Social Innovation Club", dateTime: "3", likes: 200, comments: 23, description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet." },
//         { title: "Title#2", writer: "DANISH", dateTime: "3", likes: 200, comments: 23, description: "lorem ipsum dolor sit amet. Hello" },
//         { title: "Title#3", writer: "DANISH", dateTime: "3", likes: 200, comments: 23, description: "lorem ipsum dolor sit amet." }
//     ];

//     return <FlatList
//         keyExtractor={item => item.title}
//         data={posts}
//         renderItem={({ item }) => {
//             return <PostDetail title={item.title} writer={item.writer} dateTime={item.dateTime} likes={item.likes} comments={item.comments} description={item.description} />
//         }}
//     />
// }

// export default PostScreen;