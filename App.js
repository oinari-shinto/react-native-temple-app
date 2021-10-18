import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState(' Up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />a
      <Button title="Change text" onPress={() => setOutputText('The text changed!')}/>
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
});
