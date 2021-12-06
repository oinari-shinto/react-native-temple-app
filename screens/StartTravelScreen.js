import React from 'react';
import { View, Text, StyleSheet, _Text, Button } from 'react-native';
import Colors from '../constants/colors';
import Input from '../components/Input';
import Card from '../components/Card';

const StartTravelScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Travel Screen</Text>
            <Card style={style.inputContainer}>
                <Text style={styles.title}>Select a way</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='default' maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={() => {}} color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={Colors.primary} /></View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }

});

export default StartTravelScreen
