import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert 
} from 'react-native';
import Colors from '../constants/colors';
import Input from '../components/Input';
import TempleContainer from '../components/TempleContainer';
import Card from '../components/Card';




const StartTravelScreen = () => {

    const [enterValue, setEnterValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedTemple, setSelectedTemple] = useState();

    const nameInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnterValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
            const chosenTemple = parseInt(enterValue);
            if ( isNaN(chosenTemple) || chosenTemple <= 0 || chosenTemple > 99 ) {
                Alert.alert('Invalid temple!', 'Please input name temple', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
                return; 
            }
        setConfirmed(true);
        setSelectedTemple(chosenTemple);
        setEnterValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
        <Card>
            <Text style={styles.summaryContainer}>Chosen Temple:</Text>
            <TempleContainer>{selectedTemple}</TempleContainer>
            <Button title='Start travel' onPress={() => props.onChooseTemple(selectedTemple)}/>
        </Card>
    }

    

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text>The Travel Screen</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a way</Text>
                <Input 
                style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false} 
                keyboardType='default' 
                maxLength={2}
                onChangeText={nameInputHandler}
                value={enterValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
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
        fontFamily: 'open-sans-bold'
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }

});

export default StartTravelScreen
