import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShrineItem = (props) => {
    return (
        <View style={styles.listItem}><Text>{props.title}</Text></View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
      }
});

export default ShrineItem;