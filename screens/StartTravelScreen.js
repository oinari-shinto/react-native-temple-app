import React from 'react';
import { View, Text, StyleSheet, _Text, TextInput, Button } from 'react-native';

const StartTravelScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Travel Screen</Text>
            <View>
                <Text style={styles.title}>Select a way</Text>
                <TextInput style={styles.inputContainer}/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </View>
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
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }

});

export default StartTravelScreen
