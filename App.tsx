import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium, 
  Poppins_600SemiBold 
} from '@expo-google-fonts/poppins';

import { Home } from './src/pages/Home'; 
import { theme } from './src/theme';

export default function App() {

    SplashScreen.preventAutoHideAsync();
    let [fontsLoaded] = useFonts({  
      Poppins_400Regular,
      Poppins_500Medium, 
      Poppins_600SemiBold 
    });

    if(!fontsLoaded) {
      return null;
    }

    SplashScreen.hideAsync();

  return (
    <View
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
    </View>
  )
};
