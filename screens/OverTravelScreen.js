import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const OverTravelScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>The Travel is over!</Text>
            <Image source={require('../assets/templeWall.png')}/>
            <Text style={DefaultStyles.bodyText}>Number of temples: {props.templeNumber}</Text>
            <Text style={DefaultStyles.bodyText} >Number was: {props.userTemples}</Text>
            <Button title='NEW TRAVEL' onPress={props.onRestart}/>
        </View>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
export default OverTravelScreen
