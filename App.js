import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';

import AppLoading from 'expo-app-loading';

import ShrineItem from './components/ShrineItem';
import ShrineInput from './components/ShrineInput';
import Header from './components/Header';
import StartTravelScreen from './screens/StartTravelScreen';
import TempleScreen from './screens/TempleScreen';
import OverTravelScreen from './screens/OverTravelScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  
  
  const [courseShrines, setCourseShrines] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const [userTemple, setUserTemple] = useState();
  const [guessTemples, setGuessTemples] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
    <AppLoading 
    startAsync = {fetchFonts} 
    onFinish={() => setDataLoaded(true)}
    onError={(err) => console.log(err)}
    />
    );
  };

  const configureNewTravelHandler = () => {
    setGuessTemples(0);
    setUserTemple(null);
  };
  
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

  const startTempleHandler = (selectedTemple) => {
    setUserTemple(selectedTemple);
    setGuessTemples(0);
  };

  const travelOverHandler = numOfTemples => {
    setGuessTemples(numOfTemples);
  };

  let content = <StartTravelScreen onChooseTemple={startTempleHandler}/>;

  if (userTemple && guessTemples <= 0) {
    content = <TempleScreen userChoice={userTemple} onTravelOver={travelOverHandler}/>;
  } else if (guessTemples > 0) { 
    content = <OverTravelScreen 
    templeNumber={guessTemples} 
    userTemple={userTemple} 
    onRestart={configureNewTravelHandler}/>;
  };


  return (
    <SafeAreaView style={styles.screen}>
    <View>
      <View style={styles.screenHeader}>
         <Header title="Guess a number" />
         {content}
         
      </View> 


      {/* <Button title={'Add New Shrine'} onPress={() => setIsAddMode(true)}/> */}
      <StatusBar style="auto" />
      
      {/* <ShrineInput visible={isAddMode} onAddShrine={addShrineHandler} onCancel={stopAddShrineHandler}/>  */} 

      {/* <FlatList data={courseShrines} renderItem={itemData => <ShrineItem id={itemData.item.id} onDelete={removeShrineHandler} title={itemData.item.value} />} /> */}
        
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  screenHeader: {
    flex: 1
  }
  
});
