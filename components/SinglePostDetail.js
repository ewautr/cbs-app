import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const SinglePostDetail = props => {
    return (
        <View>
            {props.imageUrl ? <Image style={styles.image} source={{ uri: props.imageUrl }} /> : null}
            <View style={styles.container}>
                <Text style={styles.headline}>{props.title}</Text>
                <View style={styles.wrapperAuthor}>
                    <Image style={styles.imgSmall} source={{ uri: props.authorLogo }} />
                    <Text style={styles.author}>{props.author}</Text>
                </View>
                <View style={styles.detailsWrapper}>
                    <Text style={styles.date}>{props.date}</Text>
                    <View style={styles.detailsWrapper}>
                        <Text style={styles.likes}>
                            <Ionicons
                                name="thumbs-up-sharp"
                                size={14}
                                color="#5050A5"
                            /> {props.likes}</Text>
                        <Text style={styles.comments}>
                            <Ionicons
                                name="chatbox-ellipses-sharp"
                                size={14}
                                color="#5050A5"
                            /> {props.comments}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
                <View style={styles.hr}></View>
                <View style={styles.detailsWrapper}>
                    <Text style={styles.likesBig}>{props.likes} liked this</Text>
                    <View style={styles.likeBtn}>
                        <Ionicons
                            name="thumbs-up-sharp"
                            size={16}
                            color="#5050A5"
                        />
                        <Button title="like" color='#5050A5' />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: "flex",
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'

    },
    detailsWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    date: {
        color: "#AAAAAA",
        fontSize: 14
    },
    comments: {
        color: "#5050A5",
        fontFamily: 'OpenSans_700Bold',
        fontSize: 14
    },
    likes: {
        marginRight: 20,
        color: "#5050A5",
        fontFamily: 'OpenSans_700Bold',
        fontSize: 14
    },
    likesBig: {
        fontSize: 16,
        color: '#32305D',
        fontFamily: 'OpenSans_700Bold',
    },
    image: {
        width: '100%',
        height: 215,
    },
    headline: {
        fontSize: 26,
        color: "#333333",
        fontFamily: 'Teko_700Bold',
    },
    description: {
        fontSize: 16,
        color: "#333333",
        fontFamily: 'OpenSans_400Regular',
        lineHeight: 22
    },
    topic: {
        color: "#5050A5",
        textTransform: "uppercase",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5
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
        marginBottom: 20
    },
    imgSmall: {
        width: 30,
        height: 30,
        borderRadius: 5,
        marginRight: 10
    },
    wrapperAuthor: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    interaction: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
    },
    likeBtn: {
        color: '#5050A5',
        borderColor: '#5050A5',
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 16,
        fontFamily: 'OpenSans_700Bold',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }

})

export default SinglePostDetail;