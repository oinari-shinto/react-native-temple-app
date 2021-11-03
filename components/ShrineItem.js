import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShrineItem = () => {
    return (
        <View style={styles.listItem}><Text>{itemData.item.value}</Text></View>
    )
}

const styles = StyleSheet.create({});

export default ShrineItem;