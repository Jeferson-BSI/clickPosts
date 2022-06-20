import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import { 
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import AppProvider  from './src/hooks';
import { Router } from './src/routes/stackRouter';


export default function App() {
  SplashScreen.preventAutoHideAsync();
  let [fontsLoaded] = useFonts({  
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold 
  });

  if(!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

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
