import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

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
            <View style={styles.resultContainer}>
                <Text style={DefaultStyles.bodyText}>Number of temples: <Text style={styles.highlight}>{props.templeNumber}</Text></Text>
                <Text style={DefaultStyles.bodyText} >Number was: <Text style={styles.highlight}>{props.userTemples}</Text></Text>
                <MainButton  onPress={props.onRestart}>NEW TRAVEL</MainButton>
            </View>
            
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
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bolt',
        textAlign: 'center'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    }
});
export default OverTravelScreen
