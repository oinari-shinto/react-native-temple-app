import React,  { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import TempleContainer from '../components/TempleContainer';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
import DefaultStyles from '../constants/default-styles';



const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};


const renderList = (value, numOfRound) => (
<View key={value} style={styles.listItem}>
<Text style={DefaultStyles.bodyText}>#{numOfRound}</Text>
<Text style={DefaultStyles.bodyText}>{value}</Text>
</View>);

const TempleScreen = (props) => {
    const initialGuess = generateRandomBetween(1,100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const [ availableDeviceWidth, setAvailableDeviceWidth ] = useState(Dimensions.get('window').width);
    const [ availableDeviceHeight, setAvailableDeviceHeight ] = useState(Dimensions.get('window').height);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onTravelOver } = props;

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout)

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });


    useEffect(() => {
        if (currentGuess === userChoice) {
            onTravelOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onTravelOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || 
        (direction === 'greater' && currentGuess > props.userChoice))
        {
        Alert.alert('Dont\'t lie!', 'You know that this is wrong...', [
            {text: 'Sorry!', style: 'cancel'}]);
        return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        /* setRounds(curRounds => curRounds + 1); */
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    };

    if (availableDeviceHeight < 500) {
        return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
            <View style={styles.controls}>
                <MainButton  onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name='md-remove' size={24} color="white"/>
                </MainButton>
                <TempleContainer>{currentGuess}</TempleContainer>
                <MainButton  onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name='md-add' size={24} color="white"/>
                </MainButton>
            </View>
                
            
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderList(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
           
        </View>
        );
    };

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
            <TempleContainer>{currentGuess}</TempleContainer>
            <Card style={styles.buttonContainer}>
                <MainButton  onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name='md-remove' size={24} color="white"/>
                </MainButton>
                <MainButton  onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name='md-add' size={24} color="white"/>
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderList(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //marginTop: 20
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 400,
        maxWidth: '90%'
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%'
    },
    listContainer: {
        flex: 1,
        //width: '80%'
        width: Dimensions.get('window').width > 350 ? '60%' : '80%',
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    }
});

export default TempleScreen
