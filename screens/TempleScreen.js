import React,  { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TempleContainer from '../components/TempleContainer';

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
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1,100, props.userChoise)
    );
    return (
        <View>
            <Text>Opponent's Guess</Text>
            <TempleContainer>{currentGuess}</TempleContainer>
        </View>
    )
}

const styles = StyleSheet.create({});

export default TempleScreen
