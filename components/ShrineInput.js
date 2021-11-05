import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet  } from "react-native";

const ShrineInput = (props) => {
    const [enteredShrine, setEnteredShrine] = useState('Japanese Shrine map');
    //const [courseShrines, setCourseShrines] = useState([]);

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
        <Button title="Change text" onPress={() => setEnteredShrine('The text changed!')}/>
        <View style={styles.insideContainer}>
        <TextInput placeholder="Shrine name" style={styles.input} onChangeText={shrineInputHandler} value={enteredShrine}/>
        <Button title='ADD' onPress={addShrineHandler}/>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    
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