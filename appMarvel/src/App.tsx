import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#323232" />
    {/* <AppProvider> */}
    <View style={{ flex: 1, backgroundColor: '#323232' }}>
      <Routes />
    </View>
    {/* </AppProvider> */}
  </NavigationContainer>
);

export default App;
