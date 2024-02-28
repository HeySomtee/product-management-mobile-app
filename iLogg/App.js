import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './Components/LoginScreen';
import TestComponent from './Components/TestComponent';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      {/* <LoginScreen /> */}
      <LoginScreen />
    </>
  );
}

export default App;
