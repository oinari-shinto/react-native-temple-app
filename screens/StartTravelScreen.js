import React from 'react';
import { View, Text, StyleSheet, _Text } from 'react-native';

const StartTravelScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Travel Screen</Text>
            <View>
                <Text>Select a way</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    }

});

export default StartTravelScreen
