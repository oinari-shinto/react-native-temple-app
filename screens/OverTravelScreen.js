import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const OverTravelScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Travel is over!</Text>
            <Text>Number of temples: {props.templeNumber}</Text>
            <Text>Number was: {props.userTemples}</Text>
            <Button title='NEW TRAVEL' onPress={props.onRestart}/>
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
