import React from 'react';
import { 
    View,
    Text,
     StyleSheet,
    Button,
    Image,
    Dimensions,
    ScrollView
 } from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const OverTravelScreen = (props) => {
    return (
        
        <ScrollView>
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
        </ScrollView>
        
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        //width: 300,
        //height: 300,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        overflow: 'hidden',
        borderColor: 'black',
        marginVertical: Dimensions.get('window').height / 30,
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
        marginVertical: Dimensions.get('window').height / 60,
    }
});
export default OverTravelScreen
