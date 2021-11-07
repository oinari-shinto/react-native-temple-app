import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Modal  } from "react-native";

const ShrineInput = (props) => {
    const [enteredShrine, setEnteredShrine] = useState('Japanese Shrine map');
    

    const shrineInputHandler = (enteredText) => {
        setEnteredShrine(enteredText);
      };
      
    return (
       <Modal visible={props.visible} animationType="slide">
        <View style={styles.container}>
        <Text>{enteredShrine}</Text>
        <Button title="Change text" onPress={() => setEnteredShrine('The text changed!')}/>
        
        <View style={styles.insideContainer}>
        <TextInput placeholder="Shrine name" style={styles.input} onChangeText={shrineInputHandler} value={enteredShrine}/>
        <Button title='ADD' onPress={props.onAddShrine.bind(this, enteredShrine)} />
        </View>
        </View>
      </Modal>
    )};

const styles = StyleSheet.create({
  
    container: {
        padding: 10,
       
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    insideContainer: {
      padding: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderBottomColor: 'black',
      borderBottomWidth: 1
    },
});
export default ShrineInput;