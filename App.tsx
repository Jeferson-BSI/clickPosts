import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { 
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold

} from '@expo-google-fonts/roboto';

import { Home } from './src/pages/Home'; 
import { theme } from './src/theme';


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
    <GestureHandlerRootView
      style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}
    >
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent

      />
      <Home />
    </GestureHandlerRootView>
  )
};
