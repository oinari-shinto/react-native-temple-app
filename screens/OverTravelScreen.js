import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const OverTravelScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Travel is over!</Text>
        </View>
    )
};
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
export default OverTravelScreen
