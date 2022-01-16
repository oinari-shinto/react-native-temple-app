import React,  { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import TempleContainer from '../components/TempleContainer';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';


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

const TempleScreen = (props) => {
    const initialGuess = generateRandomBetween(1,100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onTravelOver } = props;

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
            <ScrollView>
                {pastGuesses.map(guess => <View key={guess}><Text>{guess}</Text></View>)}
            </ScrollView>
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
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    }
});

export default TempleScreen
