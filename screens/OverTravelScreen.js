import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const OverTravelScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>The Travel is over!</Text>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/templeWall.png')} 
                    style={styles.image}
                    resizeMode='cover'/>
            </View>
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
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        overflow: 'hidden',
        borderColor: 'black',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
export default OverTravelScreen
