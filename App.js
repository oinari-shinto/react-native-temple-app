import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Japanese temple map');
  return (
    <View style={styles.container}>
      
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
      <Button title="Change text" onPress={() => setOutputText('The text changed!')}/>
      <View style={styles.insideContainer}>
        <TextInput placeholder="Temple name" style={styles.input}/>
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
