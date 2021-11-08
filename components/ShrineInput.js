import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Modal  } from "react-native";

const ShrineInput = (props) => {
    const [enteredShrine, setEnteredShrine] = useState('Japanese Shrine map');
    

    const shrineInputHandler = (enteredText) => {
        setEnteredShrine(enteredText);
      };
      
    return (
       <Modal visible={props.visible} animationType="slide">
        
        
        <View style={styles.insideContainer}>
        <TextInput placeholder="Shrine name" style={styles.input} onChangeText={shrineInputHandler} value={enteredShrine}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
           <Button  title="Cancel" color="red" onPress={props.onCancel}/>
          </View>
          <View style={styles.button}>
            <Button  title="ADD" onPress={props.onAddShrine.bind(this, enteredShrine)} />
          </View>
        </View>
       
        
        </View>
        
      </Modal>
    )};

const styles = StyleSheet.create({
  
    container: {
        
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
    insideContainer: {
      
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 10,
      
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%',
    },
    button: {
      width: '40%'
    }
});
export default ShrineInput;