import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('Japanese temple map');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.container}>
      
      <Text>{enteredGoal}</Text>
      <StatusBar style="auto" />
      <Button title="Change text" onPress={() => setEnteredGoal('The text changed!')}/>
      <View style={styles.insideContainer}>
        <TextInput placeholder="Temple name" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title='ADD' onPress={addGoalHandler}/>

      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
