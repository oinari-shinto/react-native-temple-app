import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredShrine, setEnteredShrine] = useState('Japanese Shrine map');
  const [courseShrines, setCourseShrines] = useState([]);

  const shrineInputHandler = (enteredText) => {
    setEnteredShrine(enteredText);
  };

  const addShrineHandler = () => {
    setCourseShrines(currentShrines => [...currentShrines, enteredShrine]);
  };

  return (
    <View style={styles.container}>
      
      <Text>{enteredShrine}</Text>
      <StatusBar style="auto" />
      <Button title="Change text" onPress={() => setEnteredShrine('The text changed!')}/>
      <View style={styles.insideContainer}>
        <TextInput placeholder="Shrine name" style={styles.input} onChangeText={shrineInputHandler} value={enteredShrine}/>
        <Button title='ADD' onPress={addShrineHandler}/>

      </View>
      <ScrollView>
        {courseShrines.map((shrine) => <View key={shrine} style={styles.listItem}><Text>{shrine}</Text></View>)}
      </ScrollView>
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
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});
