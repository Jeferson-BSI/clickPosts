import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider  from './src/hooks';
import { Router } from './src/routes/stackRouter';


export default function App() {

  return (
    <NavigationContainer>
    <AppProvider>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
        <Router />
      </AppProvider>
    </NavigationContainer>
  )
};
