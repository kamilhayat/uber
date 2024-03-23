import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/index.js';

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <HomeScreen/>
   
    </>
  );
};
export default App;