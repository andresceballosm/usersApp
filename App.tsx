/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

//Navigation
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import StackNavigation from './src/routes/stack-navigation';

const App = () => {
  const navigationRef = useNavigationContainerRef(); 
  return (
    <SafeAreaView style={{ flex:1 }}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
     </SafeAreaView>
  );
};

export default App;
