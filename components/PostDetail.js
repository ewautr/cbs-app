import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const PostDetail = props => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.topic}>Blog</Text>
                </View>
                <View>
                    <Text style={styles.headline}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </View>
            <View>
                <View style={styles.interaction}>
                    <Text style={{ fontSize: 12 }}>{props.dateTime}</Text>
                    <Text style={{ color: "#5050A5", fontWeight: 'bold', fontSize: 12 }}>{props.likes} {props.comments}</Text>
                </View>
                <View style={styles.hr}></View>
                <View style={styles.wrapperBottom}>
                    <View style={styles.imgSmall}></View>
                    <Text style={styles.writer}>{props.writer}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: "#FFFFFF",
        padding: 20,
        display: "flex",
        justifyContent: 'space-between',
        height: 250,
        maxHeight: 250,
        borderRadius: 5,
        shadowColor: "#AAAAAA29",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 100,
        shadowRadius: 6,
        elevation: 6,

    },
    headline: {
        fontSize: 26,
        color: "#333333",
        marginBottom: 5,
        fontWeight: "bold",
        fontFamily: 'Teko-Bold',
    },
    description: {
        fontSize: 14,
        color: "#333333",
        overflow: 'hidden',
        maxHeight: 80
    },
    topic: {
        color: "#5050A5",
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 5
    },
    writer: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333333",
    },
    hr: {
        borderTopColor: "#EEEEEE",
        borderTopWidth: 1,
        marginTop: 10,
        marginBottom: 10
    },
    imgSmall: {
        width: 30,
        height: 30,
        backgroundColor: "red",
        borderRadius: 5,
        marginRight: 10
    },
    wrapperBottom: {
        display: "flex",
        flexDirection: 'row'
    },
    interaction: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: 'bold',
    }


})

export default PostDetail;