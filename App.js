import React from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
const App = () => {
  return (
    // <GestureHandlerRootView>
    <Navigation />
    // </GestureHandlerRootView>
  );
};

export default App;
