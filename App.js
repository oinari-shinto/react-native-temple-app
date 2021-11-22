import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import ShrineItem from './components/ShrineItem';
import ShrineInput from './components/ShrineInput';
import Header from './components/Header';

export default function App() {
  
  const [courseShrines, setCourseShrines] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  //create here key in the object because FlatList need it
  const addShrineHandler = (shrineTitle) => {
    setCourseShrines(currentShrines => [...currentShrines, { id: Math.random().toString(), value: shrineTitle}]);
    setIsAddMode(false);
  };

  const removeShrineHandler = shrineId => {
    setCourseShrines(currentShrines => {
      return currentShrines.filter((shrine) => shrine.id !== shrineId);
    });
    
  };

  const stopAddShrineHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.screenHeader}>
         <Header title="Guess a number" />
      </View>


      <Button title={'Add New Shrine'} onPress={() => setIsAddMode(true)}/>
      <StatusBar style="auto" />
      
      <ShrineInput visible={isAddMode} onAddShrine={addShrineHandler} onCancel={stopAddShrineHandler}/>  

      <FlatList data={courseShrines} renderItem={itemData => <ShrineItem id={itemData.item.id} onDelete={removeShrineHandler} title={itemData.item.value} />} />
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  screenHeader: {
    flex: 1
  }
  
});
