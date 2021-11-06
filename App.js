import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import ShrineItem from './components/ShrineItem';
import ShrineInput from './components/ShrineInput';

export default function App() {
  
  const [courseShrines, setCourseShrines] = useState([]);

  
  //create here key in the object because FlatList need it
  const addShrineHandler = (shrineTitle) => {
    setCourseShrines(currentShrines => [...currentShrines, { key: Math.random().toString(), value: shrineTitle}]);
  };

  return (
    <View style={styles.screen}>
      
      
      <StatusBar style="auto" />
      
      <ShrineInput onAddShrine={addShrineHandler}/>

      
      <FlatList data={courseShrines} renderItem={itemData => <ShrineItem title={itemData.item.value} />} />
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
 
  
});
