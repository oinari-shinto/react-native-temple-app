import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import ShrineItem from './components/ShrineItem';

export default function App() {
  const [enteredShrine, setEnteredShrine] = useState('Japanese Shrine map');
  const [courseShrines, setCourseShrines] = useState([]);

  const shrineInputHandler = (enteredText) => {
    setEnteredShrine(enteredText);
  };
  //create here key in the object because FlatList need it
  const addShrineHandler = () => {
    setCourseShrines(currentShrines => [...currentShrines, { key: Math.random().toString(), value: enteredShrine}]);
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
      <FlatList data={courseShrines} renderItem={itemData => <ShrineItem title={itemData.item.value} />} />
        
      
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
  
});
