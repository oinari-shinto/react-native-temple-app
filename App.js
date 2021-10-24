import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Japanese temple map');
  return (
    <View style={styles.container}>
      
      <Text>{outputText}</Text>
      <StatusBar style="auto" />a
      <Button title="Change text" onPress={() => setOutputText('The text changed!')}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Temple name" style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1}}/>
        <Button title='ADD'/>

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
    padding: 20,


  },
});
